import React from "react";
import './css/style.css';
import './js/hello'
import Main_car from "./main_carousel";

function Main(props){
    return(<>
    <Main_car />
       <div class="main_cont_01">
        <div class="main_cont_wrap mo_tr">
            <div class="area_sc first">
                <a href="/menu/menu_list" class="sc_link"></a>
                <figure class="sc_wrap">
                    <span class="sc_img">
                        <img src="img/main01.jpg" alt="전체메뉴 이미지" />
                    </span>
                    <figcaption>
                        <p class="sc_tit fz_02">
                            <span class="s_block">가격 이상의 가치가 담긴</span>
                            <span class="s_block">다양한 메뉴를 확인해 보세요</span>
                        </p>
                        <span class="sc_txt">한솥 메뉴</span>
                    </figcaption>
                </figure>
            </div>
            <div class="area_sc">
                <a href="/store/store_find" class="sc_link"></a>
                <figure class="sc_wrap">
                    <span class="sc_img">
                        <img src="img/main02.jpg" alt="주변점포찾기 이미지" />
                    </span>
                    <figcaption>
                        <p class="sc_tit fz_02">
                            <span class="s_block">갓 지은 한끼가 기다리고 있는</span>
                            <span class="s_block">가까운 한솥 매장을 찾아보세요</span>
                        </p>
                        <span class="sc_txt">주변점포찾기</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
    <div class="main_cont_02">
        <div class="main_cont_wrap mo_tr">
            <div class="main_intro">
                <h2 class="h2_int fz_01">
                    <span class="s_block">가맹점주에게도<br/></span>
                    <span class="s_block">든든한 한솥입니다</span>
                </h2>
                <p class="int_tit">
                    <span class="s_block">점주님들의 꿈을 실현시켜 드리기 위해</span>
                    <span class="s_block">가맹점주와 성공까지 동행하는 한솥!</span>
                    <span class="s_block">상담부터 개업까지 모든 희로애락을 함께 합니다.</span>
                </p>
            </div>
            <div class="to_wrap">
                <div class="area_sc first">
                    <a href="/franchise/hansot_store" class="sc_link"></a>
                    <figure class="sc_wrap">
                        <span class="sc_img">
                            <img src="img/main03.jpg" alt="why한솥 가맹점 이미지" />
                        </span>
                        <figcaption>
                            <p class="sc_tit fz_02">
                                <span class="s_block">한솥은 언제나 고객과 점주님들의</span>
                                <span class="s_block">이익을 먼저 생각합니다</span>
                            </p>
                            <span class="sc_txt">Why 한솥 가맹점</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="area_sc">
                    <a href="/franchise/success" class="sc_link"></a>
                    <figure class="sc_wrap">
                        <span class="sc_img">
                            <img src="img/main04.jpg" alt="성공수기 이미지" />
                        </span>
                        <figcaption>
                            <p class="sc_tit fz_02">
                                <span class="s_block">한솥과 함께하는 가맹점주들의</span>
                                <span class="s_block">성공 스토리입니다</span>
                            </p>
                            <span class="sc_txt">성공수기</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <div class="main_cont_03">
        <div class="main_hansot">
            <div class="main_hansot_bg"> 
            </div>
            <div class="main_cont_wrap">
                <div class="main_info mo_version">
                    <h2 class="h2_info fz_01">
                        <span class="s_block">든든한 솥밥을 위해</span>
                        <span class="s_block">한솥이 지키고,</span>
                        <span class="s_block">키워가는 것들</span>
                    </h2>
                    <p class="info_tit">
                        <span class="s_block">한솥은 '따끈한 도시락으로 지역사회에 공헌한다' 라는</span>
                        <span class="s_block">기업이념 아래, 고객 이익을 최우선으로 하며 엄선된</span>
                        <span class="s_block">좋은 식재료만 사용하는 대한민국 외식종합기업 시장을</span>
                        <span class="s_block">리드하는 글로벌 종합외식기업 입니다.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="main_cont_04">
        <div class="main_cont_wrap">
            <div class="area_sc">
                <a href="/menu/material" class="sc_link"></a>
                <figure class="sc_wrap">
                    <span class="sc_img">
                        <img src="img/main05.jpg" alt="식재료 이미지" />
                    </span>
                    <figcaption>
                        <h2 class="h2_mt fz_01">
                            <span class="s_block">식재료 앞에서는</span>
                            <span class="s_block">한없이</span>
                            <span class="s_block">까탈스럽습니다</span>
                        </h2>
                        <p class="sc_tit">
                            <span class="s_block">맑고 깨끗한 자연 환경속에서 재배된 식재료가</span>
                            <span class="s_block">아니면 한솥이 될 수 없습니다.</span>
                            <span class="s_block">모든 식재료는 고객분들이 안심하고 드실 수 있도록</span>
                            <span class="s_block">엄격한 기준 아래 선별됩니다.</span>
                        </p>
                        <span class="sc_txt">식재료이야기</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
    <div class="conts_more">
        <h2 class="more_tit">더 많은 이야기</h2>
        <ul>
            <li style={{float:"left"}}>
                <figure>
                    <span class="more_img">
                        <img src="img/main10.jpg" alt="한솥의 약속" />
                    </span>
                    <figcaption>
                        <h3 class="h3_tit">한솥의 약속</h3>
                    </figcaption>
                </figure>
            </li>
            <li style={{float:"center"}}>
                <figure>
                    <span class="more_img">
                        <img src="img/main11.jpg" alt="온라인 이벤트" />
                    </span>
                    <figcaption>
                        <h3 class="h3_tit">온라인 이벤트</h3>
                    </figcaption>
                </figure>
            </li>
            <li style={{float:"right", padding:"20px"}}>
                <a href="/hansot/news_list" class="more_link"></a>
                <figure>
                    <span class="more_img">
                        <img src="img/main12.jpg" alt="한솥 NEWS" />
                    </span>
                    <figcaption>
                        <h3 class="h3_tit">한솥 NEWS</h3>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </div>
    </>
    );
}

export default Main;