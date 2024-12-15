// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css"; // 引入CSS檔案
import Todo from "./Todo"; // 引入 Todo 組件
import Motivation from "./Motivation"; // 引入 Motivation 組件
import WordCounter from "./WordCounter"; // 引入正確的 WordCounter 組件

const App = () => {
    const [selectedDay, setSelectedDay] = useState("Monday");

    const courses = {
        Monday: ["匹克球", "網際網路概論", "數位系統"],
        Tuesday: ["程式設計", "資料結構", "機械製造"],
        Wednesday: ["計算機概論", "程式語言"],
        Thursday: ["基本設計", "全端開發入門"],
        Friday: ["高爾夫球", "雲端運算基礎"]
    };

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    return (
        <Router>
            <div className="moodle-container">
                {/* 應用程式標題 */}
                <header className="app-header">
                    <h1>Moodle Platform</h1>
                </header>

                <div className="content-wrapper">
                    {/* 左側邊欄 */}
                    <aside className="sidebar">
                        <nav>
                            <h2>功能</h2>
                            <ul>
                                <li>
                                    <Link to="/todo">待辦事項</Link>
                                </li>
                                <li>
                                    <Link to="/motivation">激勵人心</Link>
                                </li>
                                <li>
                                    <Link to="/word-counter">字數計算器</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    {/* 主內容區域 */}
                    <main className="main-content">
                        {/* 顯示課程清單 */}
                        <section className="course-list">
                            <h2>我的課程</h2>
                            <label htmlFor="day-select">選擇星期：</label>
                            <select id="day-select" value={selectedDay} onChange={handleDayChange}>
                                {Object.keys(courses).map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>

                            <ul>
                                {courses[selectedDay].map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </section>

                        {/* 配置路由來顯示不同的頁面 */}
                        <Switch>
                            <Route path="/todo" component={Todo} />
                            <Route path="/motivation" component={Motivation} />
                            <Route path="/word-counter" component={WordCounter} /> {/* 更新這行 */}
                            <Route path="/" exact>
                                <h2>歡迎來到 Moodle 平台！</h2>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;
