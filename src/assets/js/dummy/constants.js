export const LIST = ["Intro", "Previous work", "Contact"];

export const PROJECT_LIST = [
  {
    id: 0,
    title: "OTA 원격 업그레이드",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "data:image/png;base64,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",
    role: "role",
    desc: "원격으로 하드웨어 장비를 업그레이드 하는 장비 모듈",
    front: "C",
    back: "PHP",
    hw: "STM32F108",
  },
  {
    id: 1,
    title: "가동률 모니터링 시스템",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "https://img.etnews.com/photonews/1112/216438_20111205132457_975_0001.jpg",
    role: "role",
    desc: "장비의 가동현황을 모니터링하는 시스템",
    front: "C",
    back: "PHP",
    hw: "STM32F108",
  },
  {
    id: 2,
    title: "MES, ERP 시스템",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bGA11mG2OeR-z-u0xjDgsBz4-7UwRLwQyQ&usqp=CAU",
    role: "role",
    desc: "생산 관리 시스템(Manufacturing Execution System, 줄여서 MES) 전사적 자원 관리(Enterprise Resource Planning, 줄여서 ERP)",
    front: "C#",
    back: "PHP",
  },
  {
    id: 3,
    title: "Cold Chain 시스템",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "data:image/jpeg;base64,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",
    role: "role",
    desc: "콜드체인 식료품 온도 관리 시스템",
    front: "PHP",
    back: "PHP",
    hw: "ARM",
  },
  {
    id: 4,
    title: "CCTV Repositioning System",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "data:image/jpeg;base64,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",
    role: "role",
    desc: "도로공사 CCTV 제어 시스템",
    front: "Visual C++",
    back: "",
    hw: "",
  },
  {
    id: 5,
    title: "불법주정차 자동 추적 시스템",
    gitHubUrl: "gitHubUrl",
    siteUrl: "siteUrl",
    imageUrl:
      "https://mediahub.seoul.go.kr/uploads/mediahub/2021/01/390f5c43cc3448b389ff1ca19f561672.jpeg",
    role: "role",
    desc: "서울시 불법주정차 시스템",
    front: "C++ Builder",
    back: "Mysql",
    hw: "",
  },
];
