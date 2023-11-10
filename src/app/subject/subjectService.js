import pool from "../../../config/database"
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { SubjectDao } from "./subjectDao";
import { ForgettingCurve } from "../memory/memorySevice";
import { workBookDao } from "../workbook/workbookDao";

export const SubjectService = {
    create : async(body,id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const name = body.name;
        const result = await SubjectDao.create(connection,name,id);
        return response(baseResponse.SUCCESS,{
            "subjectId" : result.insertId
        });
    },
    getAll : async(id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const result = await SubjectDao.getAll(connection,id);
        return response(baseResponse.SUCCESS,result);

    },
    main : async(id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const allSubjects = await SubjectDao.getAll(connection,id);
        const subjectStatistics = [];
        console.log(allSubjects);
        for (let i = 0; i < allSubjects.length; i++) {
            const allWorkBooksBySubject = await workBookDao.getAll(connection, allSubjects[i].subject_id);
            
            if (allWorkBooksBySubject && allWorkBooksBySubject.length > 0) {
                const workBooks = allWorkBooksBySubject.map(workBook => ({
                    name: workBook.name,
                    percent: ForgettingCurve(workBook.last_seen)
                }));
                console.log(workBooks);
                const subjectStat = {
                    subjectName: allSubjects[i].name,
                    workBooks: workBooks
                };
        
                subjectStatistics.push(subjectStat);
                
            }
        }
        console.log(JSON.stringify(subjectStatistics, null, 2));
        const extractedObjects = subjectStatistics.map(subject => ({
            subjectName: subject.subjectName,
            workBooks: subject.workBooks
        }));
        
        return response(baseResponse.SUCCESS, extractedObjects);
    }
}