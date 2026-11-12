# 第十週來源對照表

> 本表是階段一 ingest 結果。來源網站經查詢核實，結構化摘要已寫入 `ingest-records.json`；尚未宣稱來源全文匯入。

| Source ID | 來源 | 對應既有 Wiki |
|---|---|---|
| SRC-001 | [2.2. Degrees of Freedom of a Robot](https://modernrobotics.northwestern.edu/nu-gm-book-resource/2-2-degrees-of-freedom-of-a-robot/) | `pages/robot-arm-basics.html` |
| SRC-002 | [3.3.1. Homogeneous Transformation Matrices](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-1-homogeneous-transformation-matrices/) | `pages/homogeneous-transform.html`<br>`pages/heterogeneous-dual-arm.html` |
| SRC-003 | [4.1.1. Product of Exponentials Formula in the Space Frame](https://modernrobotics.northwestern.edu/nu-gm-book-resource/4-1-1-product-of-exponentials-formula-in-the-space-frame/) | `pages/forward-kinematics.html` |
| SRC-004 | [6.2. Numerical Inverse Kinematics (Part 1 of 2)](https://modernrobotics.northwestern.edu/nu-gm-book-resource/6-2-numerical-inverse-kinematics-part-1-of-2/) | `pages/inverse-kinematics.html` |
| SRC-005 | [Introduction: PID Controller Design](https://ctms.engin.umich.edu/CTMS/index.php?example=Introduction&section=ControlPID) | `pages/pid-control.html` |
| SRC-006 | [REP-103: Standard Units of Measure and Coordinate Conventions](https://reps.openrobotics.org/rep-0103/) | `pages/homogeneous-transform.html`<br>`pages/heterogeneous-dual-arm.html` |

## 六篇原有文章對應

- `pages/robot-arm-basics.html`：SRC-001
- `pages/forward-kinematics.html`：SRC-003
- `pages/inverse-kinematics.html`：SRC-004
- `pages/homogeneous-transform.html`：SRC-002, SRC-006
- `pages/pid-control.html`：SRC-005
- `pages/heterogeneous-dual-arm.html`：SRC-002, SRC-006

## 使用時注意

- `SRC-003` 提供正向運動學的 POE 方法，原有 Wiki 採連桿座標轉換連乘；**概念對應，但不可宣稱公式完全相同**。
- `SRC-004` 說明數值逆運動學，原有 Wiki 含平面二連桿解析法；**方法不相同**，生成簡報時須分別交代。
- `SRC-002`、`SRC-006` 支持座標轉換與單位標準，不支持使用者雙臂實驗的成功率、精度或實驗完成狀態。
- `SRC-005` 是通用 PID 教材，不是特定機械手臂控制器的性能報告。
