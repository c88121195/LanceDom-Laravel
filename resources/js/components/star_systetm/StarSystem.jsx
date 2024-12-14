import React from 'react'
import Start from '../img/Icon/Start.png'
import Avatar from '../img/Icon/Male User.png'

function StarSystem() {
    return (
        <React.Fragment>
            <div class="pathLink">
                <img src={Start} alt="icon" />
                <a href="#">我的案件</a>
                <label for=""> &gt; </label>
                <a href="#">評價回饋</a>
            </div>

            {/* 評價區塊 */}
            <div class="ratingSystem">
                <div class="explain">
                    <h2>評價接案者</h2>
                    <ul>
                        <li>
                            交易完成後，您可以給予「優良」、「普通」或「差勁」的評價，並留下意見評語。
                        </li>
                        <li>
                            「優良」代表五顆星、「普通」代表三顆星、「差勁」代表一顆星。
                        </li>
                        <li>
                            評價一旦送出便無法修改，請謹慎給予。
                        </li>
                        <li>
                            所有評價都會記錄在會員的「評價頁面」，供其他會員做參考。
                        </li>
                    </ul>
                </div>
                <hr />
                <div class="userInfo">
                    <img src={Avatar} alt="avatar" />
                    <div class="userInfoText">
                        <h3 id="caseName" name="caseName">獨立品牌網頁設計</h3>
                        <p id="userName" name="userName">陳曉白快樂工作室</p>
                        <p id="caseDate" name="caseDate">2024/10/30</p>
                    </div>
                </div>
                <div class="rating">
                    <div class="starPro">
                        <p>對方專業度：</p>
                        <div class="ratingStar">
                            <input type="radio" name="star15" id="star15" />
                            <label for="star15"></label>
                            <input type="radio" name="star14" id="star14" />
                            <label for="star14"></label>
                            <input type="radio" name="star13" id="star13" />
                            <label for="star13"></label>
                            <input type="radio" name="star12" id="star12" />
                            <label for="star12"></label>
                            <input type="radio" name="star11" id="star11" />
                            <label for="star11"></label>
                        </div>
                    </div>
                    <div class="starReply">
                        <p>對方回覆速度：</p>
                        <div class="ratingStar">
                            <input type="radio" name="star25" id="star25" />
                            <label for="star25"></label>
                            <input type="radio" name="star24" id="star24" />
                            <label for="star24"></label>
                            <input type="radio" name="star23" id="star23" />
                            <label for="star23"></label>
                            <input type="radio" name="star22" id="star22" />
                            <label for="star22"></label>
                            <input type="radio" name="star21" id="star21" />
                            <label for="star21"></label>
                        </div>
                    </div>
                    <div class="starCoor">
                        <p>對方整體配合度：</p>
                        <div class="ratingStar">
                            <input type="radio" name="star35" id="star35" />
                            <label for="star35"></label>
                            <input type="radio" name="star34" id="star34" />
                            <label for="star34"></label>
                            <input type="radio" name="star33" id="star33" />
                            <label for="star33"></label>
                            <input type="radio" name="star32" id="star32" />
                            <label for="star32"></label>
                            <input type="radio" name="star31" id="star31" />
                            <label for="star31"></label>
                        </div>
                    </div>
                    <p>(評價一旦送出便無法修改，請謹慎給予)</p>
                </div>
                <button type="submit" id="submitStar" name="submitStar">送出</button>
            </div>
        </React.Fragment>
    )
}

export default StarSystem