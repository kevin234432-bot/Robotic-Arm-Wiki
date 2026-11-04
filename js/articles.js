// 新增文章時更新此索引；分類必須符合 AGENTS.md 定義。
window.ARM_ARTICLES = [
  {
    "slug": "robot-arm-basics",
    "title": "機械手臂基礎與自由度",
    "category": "機械手臂基礎",
    "level": "入門",
    "desc": "理解關節、末端執行器、自由度與常見機械手臂構型。",
    "keywords": "DOF joints manipulator robot arm 6-axis 自由度 關節"
  },
  {
    "slug": "forward-kinematics",
    "title": "正向運動學（FK）",
    "category": "運動學與數學",
    "level": "基礎",
    "desc": "從各關節角度計算末端執行器的位置與方向。",
    "keywords": "FK forward kinematics 末端 位姿 joint"
  },
  {
    "slug": "inverse-kinematics",
    "title": "逆向運動學（IK）",
    "category": "運動學與數學",
    "level": "基礎",
    "desc": "從指定末端位置反求關節角，理解二連桿解法與可達性限制。",
    "keywords": "IK inverse kinematics 逆運動學 逆向運動學 關節角 解析法"
  },
  {
    "slug": "homogeneous-transform",
    "title": "齊次轉換矩陣",
    "category": "運動學與數學",
    "level": "基礎",
    "desc": "用 4×4 矩陣整合旋轉和平移，處理不同座標系的轉換。",
    "keywords": "transform rotation translation frame 4x4 座標轉換"
  },
  {
    "slug": "pid-control",
    "title": "機械手臂 PID 控制",
    "category": "控制與路徑規劃",
    "level": "基礎",
    "desc": "介紹比例、積分、微分控制與調參時的基本考量。",
    "keywords": "PID proportional integral derivative error servo"
  },
  {
    "slug": "heterogeneous-dual-arm",
    "title": "異質雙機械手臂座標協作",
    "category": "多機械手臂協作",
    "level": "研究案例",
    "desc": "以 NIRYO NED 與 TM Robot 為例，整理共同座標系與五點巡點驗證。",
    "keywords": "NIRYO NED TM Robot dual arm coordination 五點 巡點"
  }
];
