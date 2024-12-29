// URL 캐시를 저장할 Map
const urlMap = new Map<string, any>();

// 캐싱을 적용한 fetch 함수
const fetchByCache = async (url: string) => {
    if (urlMap.has(url)) {
        return urlMap.get(url); // 캐시된 데이터 반환
    }
    const response = await fetch(url);
    const data = await response.json();
    urlMap.set(url, data); // 캐시에 저장
    return data;
};

// useFetch 커스텀 훅
export const useFetch = async <T extends unknown>(url: string): Promise<T> => {
    try {
        const data = await fetchByCache(url);
        return data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};
