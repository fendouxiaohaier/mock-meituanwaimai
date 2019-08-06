import "./index.scss";

import React, { PureComponent } from 'react';

class My extends PureComponent {
    render() {
        return (
            <div className="my">
                <div className="my-header">
                    <img className="avatar" src="//p1.meituan.net/200.0/deal/bed951de0df910059c6e2ed9862fa2a479418.jpg@175_0_450_450a%7C267h_267w_2e_90Q"/>
                    <p className="nickname">XIAOMING &gt;</p>
                </div>

                <div className="my-content">
                    <ul className="items">
                        <li className="item address">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-location"></use>
                            </svg>
                            &nbsp;收获地址管理
                            <span className="arrow">&gt;</span>
                        </li>
                        <li className="item voucher">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-money"></use>
                            </svg>
                            &nbsp;商家代金券
                            <span className="arrow">&gt;</span>
                        </li>
                    </ul>
                    <ul className="items">
                        <li className="item email">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-185078emailmailstreamline"></use>
                            </svg>
                            &nbsp;意见反馈
                            <span className="arrow">&gt;</span>
                        </li>
                        <li className="item question">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-aui-icon-question"></use>
                            </svg>
                            &nbsp;常见问题
                            <span className="arrow">&gt;</span>
                        </li>
                    </ul>

                    <p className="tel">客服电话 101-000-000</p>
                    <p className="servicetime">服务时间 09:00 - 23:00</p>
                </div>
            </div>
        );
    }
}

export default My;