
export const ForgettingCurve = (viewedDate) => {
    const c = 1.2196985844905355;
    const k = 1.830051138903748;

    const now = new Date();
    const viewedDateTime = new Date(viewedDate);
    // 0으로 나누는 상황을 방지하기 위해 최소한의 시간 값(1분)을 더합니다.
    const timeDifference = Math.max(Math.abs(now - viewedDateTime) / (1000 * 60), 1) / 60; // 시간으로 변환

    // 로그 함수에 0을 넣지 않도록 하기 위해, 시간 차이에 대한 로그를 취하기 전에 timeDifference가 0이 아님을 보장합니다.
    const retention = 100 * k / (Math.pow(Math.log10(timeDifference + 0.0001), c) + k); // 0.0001을 더해 로그가 무한대가 되는 것을 방지

    return retention.toFixed(2);
};

// 예시 사용
//const viewedDate = "2023-11-10T12:00:00Z"; // 문제 열람 날짜 (ISO 8601 형식)
//const retentionRate = ebbinghausForgettingCurve(viewedDate);
//console.log(`기억 보유량: ${retentionRate}%`);