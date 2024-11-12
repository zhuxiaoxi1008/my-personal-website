<template>
  <section class="main-content">
    <section  class="first-section">
      <section  class="container-row">
        <div  class="container-left">
          <div  class="sidebar" :class="{'tranY-40': isTrans}">
            <div  class="sidebar-card">
              <div  class="sidebar-avatar">
                <img
                  class="sidebar-avatar-img"
                  data-src="/person.png"
                  src="/person.png"
                />
              </div>
              <div  class="sidebar-name">ZHOU YI</div>
              <div  class="sidebar-label">" Hi ! 👋 "</div>
              <div  class="c-divider c-mb-40"></div>
              <div  class="sidebar-social">
                <a
                  
                  href="https://github.com/ZHYI-source"
                  target="_blank"
                  ><i  class="iconfont icon-github"></i></a
                ><a  href="https://gitee.com/Z568_568" target="_blank"
                  ><i  class="iconfont icon-gitee"></i
                ></a>
              </div>
              <div  class="c-divider c-mb-40 c-mt-40"></div>
              <ul  class="sidebar-other">
                <li  class="other-item">
                  <span  class="item-label">城市：</span
                  ><span  class="item-label-light">贵州·贵阳</span>
                </li>
                <li  class="other-item">
                  <span  class="item-label">交流群：</span
                  ><span  class="item-label-light">🐧 529675917</span>
                </li>
                <li  class="other-item">
                  <span  class="item-label" title="码云关注"
                    >关注我：</span
                  >
                  <div  class="item-label-light">
                    <div data-v-1f0a8cfc=""  class="align">
                    
                    </div>
                  </div>
                </li>
                <li  class="other-item">
                  <span  class="item-label">微信/QQ：</span>
                </li>
                <div  class="social">
                  <img
                    
                    width="80"
                    class="lazy-image"
                    data-src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697612406209.jpg"
                    src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697612406209.jpg"
                  /><img
                    
                    width="80"
                    class="lazy-image"
                    data-src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697791317828.png"
                    src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697791317828.png"
                  />
                </div>
              </ul>
              <div  class="c-divider c-mb-40"></div>
              <div
                
                class="sidebar-btn"
                style="background-color: rgb(245, 67, 37); border-color: rgb(245, 67, 37)"
              >
                <span >在线留言</span>
              </div>
              <span  class="downResume" style="color: rgb(245, 67, 37)"
                >下载简历</span
              >
            </div>
          </div>
        </div>
        <div  class="container-right">
          <div  class="container-right-content">
            <div  class="brand-card-list">
              <div  class="brand-card-item">
                <div  class="card-item">
                  <h3  class="card-item-title">Vue、Node</h3>
                  <div  class="c-divider"></div>
                  <div  class="card-item-content">语言框架</div>
                </div>
              </div>
              <div  class="brand-card-item">
                <div  class="card-item">
                  <h3  class="card-item-title">4 +</h3>
                  <div  class="c-divider"></div>
                  <div  class="card-item-content">实战经验</div>
                </div>
              </div>
              <div  class="brand-card-item">
                <div  class="card-item">
                  <h3  class="card-item-title">99+</h3>
                  <div  class="c-divider"></div>
                  <div  class="card-item-content">项目合作</div>
                </div>
              </div>
            </div>
            <section  class="notice">
              <div  class="notice-line">
                <span  class="notice-title">📢 公告：</span>
                <div  class="notice-desc">
                  <div  class="ant-carousel ant-carousel-vertical">
                    <div class="slick-slider slick-vertical slick-initialized" dir="ltr">
                      
                      <div class="slick-list" style="height: 22px">
                        <div
                          class="slick-track"
                          style="
                            opacity: 1;
                            transform: translate3d(0px, -44px, 0px);
                            height: 154px;
                          "
                        >
                          <div
                            class="slick-slide slick-cloned"
                            tabindex="-1"
                            data-index="-1"
                            aria-hidden="true"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                ⚙ ZHOUYI 更新日志
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="0"
                            aria-hidden="true"
                            class="slick-slide"
                            style="outline: none; width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                ⚙ ZHOUYI 站点迁移服务器完成
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="1"
                            aria-hidden="false"
                            class="slick-slide slick-active slick-current"
                            style="outline: none; width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                哥，你不更新我就帮你更新了（博主已回复）
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="2"
                            aria-hidden="true"
                            class="slick-slide"
                            style="outline: none; width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                🎉🎉有项目合作或者需要有偿解决问题的同学可以联系哦
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="3"
                            aria-hidden="true"
                            class="slick-slide"
                            style="outline: none; width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                🌟 致到访主页的朋友公告 🌟
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="4"
                            aria-hidden="true"
                            class="slick-slide"
                            style="outline: none; width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                ⚙ ZHOUYI 更新日志
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="5"
                            aria-hidden="true"
                            class="slick-slide slick-cloned"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                ⚙ ZHOUYI 站点迁移服务器完成
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="6"
                            aria-hidden="true"
                            class="slick-slide slick-cloned"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                哥，你不更新我就帮你更新了（博主已回复）
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="7"
                            aria-hidden="true"
                            class="slick-slide slick-cloned"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                🎉🎉有项目合作或者需要有偿解决问题的同学可以联系哦
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="8"
                            aria-hidden="true"
                            class="slick-slide slick-cloned"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                🌟 致到访主页的朋友公告 🌟
                              </div>
                            </div>
                          </div>
                          <div
                            tabindex="-1"
                            data-index="9"
                            aria-hidden="true"
                            class="slick-slide slick-cloned"
                            style="width: 516px"
                          >
                            <div>
                              <div
                                
                                class="notice-txt"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                ⚙ ZHOUYI 更新日志
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div  class="notice-his">
                  查看所有<i  class="iconfont icon-click"></i>
                </div>
              </div>
            </section>
            <section  class="brand-tips">
              <h5 data-v-fad7d149=""  class="section-title c-mb-40">
                🎯 Tips <span data-v-fad7d149="" data-number="01"></span>
              </h5>
              <blockquote  class="my-story">
                <p >无趣的人想过着有趣的生活。</p>
                <p >每一步都是奇迹，每一天都是新的起点。</p>
                <img
                  
                  class="wx-logo lazy-image"
                  width="120"
                  data-src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697612406209.jpg"
                  src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697612406209.jpg"
                />
              </blockquote>
            </section>
          </div>
        </div>
      </section>
      <!-- <section  class="notice notice-temp c-mb-40">
        <div  class="notice-line">
          <span  class="notice-title">公告：</span>
          <div  class="notice-desc">
            '热爱你来过的每度温暖.每次回忆都如此深刻。'
          </div>
        </div>
      </section>
      <section  class="about c-mt-40">
        <h5 data-v-fad7d149=""  class="section-title c-mb-40">
          🎯 About me <span data-v-fad7d149="" data-number="02"></span>
        </h5>
        <section  class="animate-me">
          "细数<span
            class="me-text me-text-b"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(243, 205, 19),
                rgb(243, 88, 88)
              );
            "
            >流年</span
          >，频频<span
            class="me-text me-text-e"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(76, 184, 196),
                rgb(60, 211, 173)
              );
            "
            >回眸</span
          >，过往的<span
            class="me-text me-text-e"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(76, 184, 196),
                rgb(60, 211, 173)
              );
            "
            >千回百转</span
          >到最后都成了<span
            class="me-text me-text-b"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(243, 205, 19),
                rgb(243, 88, 88)
              );
            "
            >风轻云淡</span
          >的念想，曾经的<span
            class="me-text me-text-e"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(76, 184, 196),
                rgb(60, 211, 173)
              );
            "
            >风烟往事</span
          >都成了<span
            class="me-text me-text-d"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(60, 165, 92),
                rgb(181, 172, 73)
              );
            "
            >茶余饭后</span
          >的闲话与聊侃。人生<span
            class="me-text me-text-c"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(221, 94, 137),
                rgb(247, 187, 151)
              );
            "
            >聚散无常</span
          >，生活充满变数，走过了，便从容，放下了，就轻松。没有经历，就没有<span
            class="me-text me-text-a"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(36, 198, 220),
                rgb(81, 74, 157)
              );
            "
            >体悟</span
          >；没有<span
            class="me-text me-text-e"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(76, 184, 196),
                rgb(60, 211, 173)
              );
            "
            >领悟</span
          >，就不会<span
            class="me-text me-text-c"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(221, 94, 137),
                rgb(247, 187, 151)
              );
            "
            >珍惜</span
          >。那些看似浅显的<span
            class="me-text me-text-b"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(243, 205, 19),
                rgb(243, 88, 88)
              );
            "
            >道理</span
          >，非要亲历过，才能深悟，非要亲为过，方可领会。那些看似清淡如水的<span
            class="me-text me-text-e"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(76, 184, 196),
                rgb(60, 211, 173)
              );
            "
            >寻常点滴</span
          >，回头怀想，才顿觉值得一生<span
            class="me-text me-text-d"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(60, 165, 92),
                rgb(181, 172, 73)
              );
            "
            >追忆</span
          >，终生<span
            class="me-text me-text-d"
            style="
              color: transparent;
              background-clip: text;
              font-size: 1.9rem;
              background-image: linear-gradient(
                to right,
                rgb(60, 165, 92),
                rgb(181, 172, 73)
              );
            "
            >回味</span
          >"
        </section>
      </section>
      <section  class="about c-mt-40">
        <h5 data-v-fad7d149=""  class="section-title c-mb-40">
          🎯 Service <span data-v-fad7d149="" data-number="03"></span>
        </h5>
        <section data-v-95ad582b=""  class="skill-box-t">
          <figure class="snip1382" data-v-95ad582b="">
            <img
              src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
              alt="sample96"
              data-v-95ad582b=""
            />
            <figcaption data-v-95ad582b="">
              <h2 data-v-95ad582b="">APP/小程序开发</h2>
              <p data-v-95ad582b="">
                高质量、高水平、快速地开发各平台的小程序,可进行开发 iOS 和 Android
                等跨端APP应用程序.
              </p>
            </figcaption>
          </figure>
          <figure class="snip1382 hover" data-v-95ad582b="">
            <img
              src="https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
              alt="sample99"
              data-v-95ad582b=""
            />
            <figcaption data-v-95ad582b="">
              <h2 data-v-95ad582b="">Web 网页应用开发</h2>
              <p data-v-95ad582b="">
                结合前沿技术和创新思维、高质量和专业水平打造的最现代、最优质的Web网页应用。
              </p>
            </figcaption>
          </figure>
          <figure class="snip1382" data-v-95ad582b="">
            <img
              src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
              alt="sample91"
              data-v-95ad582b=""
            />
            <figcaption data-v-95ad582b="">
              <h2 data-v-95ad582b="">Node后端服务</h2>
              <p data-v-95ad582b="">
                快速搭建WEB服务接口，为前端应用提供后端支持.帮助解决各种Node相关问题。
              </p>
            </figcaption>
          </figure>
        </section>
      </section>
      
      <section  class="blog c-mt-40 c-mb-40" id="blog">
        <h5 data-v-fad7d149=""  class="section-title c-mb-40">
          🎯 Featured Articles <span data-v-fad7d149="" data-number="05"></span>
        </h5>
        <section data-v-ca6bda8a=""  class="zy-blog-article">
          <aside
            data-v-ca6bda8a=""
            class="blog-left"
            style="
              background-image: url('http://blogapi.zhouyi.run/v1/common/files/preview/img/08.jpg');
            "
          >
            <section data-v-ca6bda8a="" class="blog-l-info">
              <p data-v-ca6bda8a="" class="info-title-sub">有趣的人记录有趣的事。</p>
              <p data-v-ca6bda8a="" class="info-title-sub ban-bred">
                <span data-v-ca6bda8a="" title="发现更多有趣的文章">
                  发现更多 <i data-v-ca6bda8a="" class="iconfont icon-shujuzhongxin"></i
                ></span>
              </p>
            </section>
          </aside>
          <section data-v-ca6bda8a="" class="blog-right">
            <section data-v-ca6bda8a="" class="blog-list"></section>
          </section>
        </section>
      </section>
      <section
        data-v-e15bfe7b=""
        
        class="blog c-mt-40 c-mb-40"
        id="comments"
      >
        <h5 data-v-fad7d149="" data-v-e15bfe7b="" class="section-title c-mb-40">
          🎯 Recent Comments <span data-v-fad7d149="" data-number="06"></span>
        </h5>
        <section data-v-e15bfe7b="" class="recent-comments">
          <div data-v-e15bfe7b="" class="r-comment-list">
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697161535901.png"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">匿名</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-08-10 22:07:57</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content">写得正好</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「JavaScript 中有趣的 9 个常用编码套路」
                </span>
              </div>
            </div>
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697161535901.png"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">匿名</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-08-10 22:07:49</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content">11</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「JavaScript 中有趣的 9 个常用编码套路」
                </span>
              </div>
            </div>
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://q1.qlogo.cn/g?b=qq&amp;nk=1170869290@qq.com&amp;s=100"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">hhc</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-04-27 20:11:29</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content">首页的鼠标效果太牛了</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付
                  APIv3 」
                </span>
              </div>
            </div>
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://blogapi.zhouyi.run.run/v1/common/files/preview/img/1697161535901.png"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">战士与乌鸦</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-04-25 22:33:08</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content">
                  这个IP地址归属地分析的接口 在我这里分析的不太准确
                  `https://opendata.baidu.com/api.php?query=${encodeURIComponent(clientIp)}&amp;co=&amp;resource_id=6006&amp;oe=utf8`,</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「【项目总结】关于访客记录功能模块技术点」
                </span>
              </div>
            </div>
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://blogapi.zhouyi.run.run/v1/common/files/preview/img/1697161535901.png"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">战士与乌鸦</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-04-25 11:49:10</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content"
                  >这个文档说明好像优于仓库代码那里【疑问】</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「【项目总结】关于访客记录功能模块技术点」
                </span>
              </div>
            </div>
            <div data-v-e15bfe7b="" class="r-comment-item">
              <div data-v-e15bfe7b="" class="author">
                <img
                  data-v-e15bfe7b=""
                  alt=""
                  src="https://blogapi.zhouyi.run/v1/common/files/preview/img/1697161535901.png"
                  class="avatar avatar-48 photo"
                  height="48"
                  width="48"
                  loading="lazy"
                  decoding="async"
                />
                <div data-v-e15bfe7b="" class="comment-info">
                  <div data-v-e15bfe7b="">鲜果</div>
                  <time data-v-e15bfe7b="" class="font-small">2024-04-20 12:47:26</time>
                </div>
              </div>
              <div data-v-e15bfe7b="" class="comment-text">
                <span data-v-e15bfe7b="" class="content">收获</span
                ><span data-v-e15bfe7b="" class="post font-small line-clamp"
                  >发表在「Nodejs实现微信小程序支付功能前后端全流程实践 全新的微信支付
                  APIv3 」
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section  class="works c-mt-40 c-mb-40" id="work">
        <h5 data-v-fad7d149=""  class="section-title c-mb-40">
          🎯 My Complete Projects <span data-v-fad7d149="" data-number="07"></span>
        </h5>
        <section data-v-a9ec7d68=""  class="pro-list work-se c-mt-40">
          <div data-v-a9ec7d68="" class="pro-item">
            <div data-v-a9ec7d68="" class="pro-box">
              <div data-v-a9ec7d68="" class="pro-title">
                <svg
                  data-v-a9ec7d68=""
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                >
                  <path
                    data-v-a9ec7d68=""
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path></svg
                ><a
                  data-v-a9ec7d68=""
                  title="https://gitee.com/Z568_568/ZHOUYI-ADMIN.git"
                  href="https://gitee.com/Z568_568/ZHOUYI-ADMIN.git"
                  target="_blank"
                  >ZHOUYI-ADMIN</a
                ><span data-v-a9ec7d68="" class="type">开源项目</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-body">
                🎉ZHOUYI-ADMIN 基于 Vue3 + JavaScript +ElementPlus + Pinia +Vite .
                搭建，开源的企业级后台管理模板。JavaScript版本能更快上手熟悉
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <span data-v-a9ec7d68="" class="lang-tip">Vue3 </span
                ><span data-v-a9ec7d68="" class="lang-tip">JavaScript </span
                ><span data-v-a9ec7d68="" class="lang-tip">ElementPlus </span
                ><span data-v-a9ec7d68="" class="lang-tip">Pinia </span
                ><span data-v-a9ec7d68="" class="lang-tip">Vite </span>
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <a data-v-a9ec7d68="" href="https://template.zhouyi.run" target="_blank"
                  >在线地址</a
                >
              </div>
            </div>
          </div>
          <div data-v-a9ec7d68="" class="pro-item">
            <div data-v-a9ec7d68="" class="pro-box">
              <div data-v-a9ec7d68="" class="pro-title">
                <svg
                  data-v-a9ec7d68=""
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                >
                  <path
                    data-v-a9ec7d68=""
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path></svg
                ><a
                  data-v-a9ec7d68=""
                  title="https://gitee.com/Z568_568/ZHOUYI-Homepage.git"
                  href="https://gitee.com/Z568_568/ZHOUYI-Homepage.git"
                  target="_blank"
                  >Vue3个人主页简历个人博客前后端分离系统</a
                ><span data-v-a9ec7d68="" class="type">开源项目</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-body">
                一款免费开源的个人主页系统，基于Vue3、Express、MongoDB、JavaScript，项目代码简洁,注释丰富,上手容易；同时还提供了一系列功能丰富的组件和工具，帮助开发者搭建个人主页简历网站和开发管理后台应用的前后端分离完整系统。
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <span data-v-a9ec7d68="" class="lang-tip"> Vue3</span
                ><span data-v-a9ec7d68="" class="lang-tip">Express</span
                ><span data-v-a9ec7d68="" class="lang-tip">MongoDB</span
                ><span data-v-a9ec7d68="" class="lang-tip">JavaScript</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <a data-v-a9ec7d68="" href="http://www.zhouyi.run" target="_blank"
                  >在线地址</a
                >
              </div>
            </div>
          </div>
          <div data-v-a9ec7d68="" class="pro-item">
            <div data-v-a9ec7d68="" class="pro-box">
              <div data-v-a9ec7d68="" class="pro-title">
                <svg
                  data-v-a9ec7d68=""
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                >
                  <path
                    data-v-a9ec7d68=""
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path></svg
                ><a
                  data-v-a9ec7d68=""
                  title="https://gitee.com/Z568_568/all-blog-sys.git"
                  href="https://gitee.com/Z568_568/all-blog-sys.git"
                  target="_blank"
                  >Vue2 个人博客完整版</a
                ><span data-v-a9ec7d68="" class="type">开源项目</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-body">
                😜博客前后端分离系统，基于Vue2、Express、Mysql、JavaScript、uniapp，项目代码简洁,注释丰富,上手容易；具有PC前台、PC管理、微信小程序、Node服务、移动端H5，已完成前后台完整基础功能，同时还提供了一系列功能丰富的组件和工具，帮助开发者搭建个人主页简历网站和开发管理后台应用的前后端分离完整系统。
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <span data-v-a9ec7d68="" class="lang-tip">Vue2</span
                ><span data-v-a9ec7d68="" class="lang-tip">Node.js</span
                ><span data-v-a9ec7d68="" class="lang-tip"> Express</span
                ><span data-v-a9ec7d68="" class="lang-tip">Sequalize</span
                ><span data-v-a9ec7d68="" class="lang-tip"> Mysql</span
                ><span data-v-a9ec7d68="" class="lang-tip">uniapp</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <a data-v-a9ec7d68="" href="http://blog.zhouyi.run" target="_blank"
                  >在线地址</a
                >
              </div>
            </div>
          </div>
          <div data-v-a9ec7d68="" class="pro-item">
            <div data-v-a9ec7d68="" class="pro-box">
              <div data-v-a9ec7d68="" class="pro-title">
                <svg
                  data-v-a9ec7d68=""
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                >
                  <path
                    data-v-a9ec7d68=""
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path></svg
                ><a
                  data-v-a9ec7d68=""
                  title="https://gitee.com/Z568_568/vue3-antd-plus.git"
                  href="https://gitee.com/Z568_568/vue3-antd-plus.git"
                  target="_blank"
                  >Vue3-Antd-Plus</a
                ><span data-v-a9ec7d68="" class="type">开源项目</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-body">
                👍 提供了一个基于最新的技术栈（Vue 3、Vite、Ant Design Vue
                3、JavaScript、Pinia、Hooks和vue-router）的完整开发模板，旨在帮助初学者更快地入门并加入团队开发。该模板包含了一系列功能模块，如大屏展示、自定义主题、角色用户、菜单授权、数据权限和系统参数等，并且所有模块都经过了完整的组件封装
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <span data-v-a9ec7d68="" class="lang-tip">Vue 3</span
                ><span data-v-a9ec7d68="" class="lang-tip">Vite</span
                ><span data-v-a9ec7d68="" class="lang-tip">Ant Design Vue 3</span
                ><span data-v-a9ec7d68="" class="lang-tip">JavaScript</span
                ><span data-v-a9ec7d68="" class="lang-tip">Pinia</span
                ><span data-v-a9ec7d68="" class="lang-tip">Hooks和vue-router</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <a
                  data-v-a9ec7d68=""
                  href="https://z568_568.gitee.io/vue3-antd-plus"
                  target="_blank"
                  >在线地址</a
                >
              </div>
            </div>
          </div>
          <div data-v-a9ec7d68="" class="pro-item">
            <div data-v-a9ec7d68="" class="pro-box">
              <div data-v-a9ec7d68="" class="pro-title">
                <svg
                  data-v-a9ec7d68=""
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                >
                  <path
                    data-v-a9ec7d68=""
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                  ></path></svg
                ><a
                  data-v-a9ec7d68=""
                  title="https://gitee.com/Z568_568/zy.files.sys.git"
                  href="https://gitee.com/Z568_568/zy.files.sys.git"
                  target="_blank"
                  >个人文件管理+图床管理服务系统</a
                ><span data-v-a9ec7d68="" class="type">开源项目</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-body">
                🎉轻量级个人文件管理、图床管理服务系统，对文本文件、图片、视频、音频、音乐等各类文件的存储管理，基于Node.js、Mysql、Vue2实现。内置用户登录和其他相关接口可扩展功能
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <span data-v-a9ec7d68="" class="lang-tip">Node.js</span
                ><span data-v-a9ec7d68="" class="lang-tip">Mysql</span
                ><span data-v-a9ec7d68="" class="lang-tip">Vue2</span>
              </div>
              <div data-v-a9ec7d68="" class="pro-footer">
                <a data-v-a9ec7d68="" href="http://files.zhouyi.run" target="_blank"
                  >在线地址</a
                >
              </div>
            </div>
          </div>
          <div data-v-a9ec7d68="" class="pro-item">
            <div class="pro-box" data-v-a9ec7d68="">
              <div class="pro-title" data-v-a9ec7d68="">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon"
                  data-v-a9ec7d68=""
                >
                  <path
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                    data-v-a9ec7d68=""
                  ></path></svg
                ><a data-v-a9ec7d68="">查看更多</a
                ><span class="type" data-v-a9ec7d68="">开源项目</span>
              </div>
              <div class="pro-body more" data-v-a9ec7d68="">
                <i class="iconfont icon-click" data-v-a9ec7d68=""></i> MORE
              </div>
            </div>
          </div>
        </section>
        
      </section>
      <section  class="connect c-mt-40 c-mb-40" id="contact">
        <h5 data-v-fad7d149=""  class="section-title c-mb-40">
          🎯 Contact Me <span data-v-fad7d149="" data-number="08"></span>
        </h5>
        <p  class="message-tips">
          留下你的足迹，让我知道你在这里看过我的留言板。
        </p>
        <div  class="connect-box">
          <div  class="contact-form">
            <section data-v-8dc0a2d6=""  class="zy-form">
              <form data-v-8dc0a2d6="" class="cont-form" id="contact-form" method="POST">
                <div data-v-8dc0a2d6="" class="row fold">
                  <input data-v-8dc0a2d6="" type="text" placeholder="昵称" /><input
                    data-v-8dc0a2d6=""
                    type="email"
                    required=""
                    placeholder="请填写正确邮箱接收反馈通知"
                  /><input data-v-8dc0a2d6="" type="text" placeholder="个人站点" />
                </div>
                <textarea
                  data-v-8dc0a2d6=""
                  id="massage"
                  required=""
                  placeholder="说点什么"
                ></textarea>
                <div data-v-8dc0a2d6="" class="text-center">
                  <button
                    data-v-8dc0a2d6=""
                    type="submit"
                    class="site-btn"
                    data-wow-delay="0.2s"
                    id="send-form"
                    style="background: rgb(245, 67, 37)"
                  >
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
          <ul  class="contact-basic">
            <li  class="basic-item">
              <span
                
                class="ant-avatar ant-avatar-circle ant-avatar-icon"
                style="width: 40px; height: 40px; line-height: 40px; font-size: 20px"
                ><i
                  
                  class="iconfont icon-customer-bussinessman"
                  style="font-size: 1.6rem"
                ></i
              ></span>
              <div  class="item-r">
                <p  class="r-t">
                  <span  class="r-t-name" style="padding-right: 10px"
                    >我的发</span
                  ><span  class="r-t-time"
                    >2024-10-31 18:02:44</span
                  >
                </p>
                <p  class="r-desc">佬</p>
              </div>
            </li>
            <li  class="basic-item">
              <span
                
                class="ant-avatar ant-avatar-circle ant-avatar-icon"
                style="width: 40px; height: 40px; line-height: 40px; font-size: 20px"
                ><i
                  
                  class="iconfont icon-customer-bussinessman"
                  style="font-size: 1.6rem"
                ></i
              ></span>
              <div  class="item-r">
                <p  class="r-t">
                  <span  class="r-t-name" style="padding-right: 10px"
                    >jason</span
                  ><span  class="r-t-time"
                    >2024-09-09 18:29:37</span
                  >
                </p>
                <p  class="r-desc">
                  大佬，有个地方不知道怎么操作的，“使用navicat连接MongoDB数据库，然后新建数据库`ZHOUYI_DB`
                  默认无密码连接，在ZHOUYI_DB数据库运行SQL文件 `SERVER/sql/ZHOUYI_DB.sql`
                  ”，我是用的mongodb
                  compass来连接数据库的，没有执行sql文件的地方，下载了其它几个连接数据库的工具好像也乜有执行sql文件的，这个sql文件里面的数据怎么导入到我本地的数据库呀
                </p>
              </div>
            </li>
            <li  class="basic-item">
              <span
                
                class="ant-avatar ant-avatar-circle ant-avatar-icon"
                style="width: 40px; height: 40px; line-height: 40px; font-size: 20px"
                ><i
                  
                  class="iconfont icon-customer-bussinessman"
                  style="font-size: 1.6rem"
                ></i
              ></span>
              <div  class="item-r">
                <p  class="r-t">
                  <span  class="r-t-name" style="padding-right: 10px"
                    >末流PG</span
                  ><span  class="r-t-time"
                    >2024-08-13 17:54:31</span
                  >
                </p>
                <p  class="r-desc">
                  今天在网上搜索图表项目时，点开的您的博客前台主页，让我眼前一亮，着实很惊艳，无趣的人想过着有趣的生活。
                  对于一个只有js基础的开发，准备学习node和Vue，尝试着搭建图表项目，希望大佬给出一些建议
                </p>
              </div>
            </li>
            <li  class="basic-item">
              <span
                
                class="ant-avatar ant-avatar-circle ant-avatar-icon"
                style="width: 40px; height: 40px; line-height: 40px; font-size: 20px"
                ><i
                  
                  class="iconfont icon-customer-bussinessman"
                  style="font-size: 1.6rem"
                ></i
              ></span>
              <div  class="item-r">
                <p  class="r-t">
                  <span  class="r-t-name" style="padding-right: 10px"
                    >菜鸟前端</span
                  ><span  class="r-t-time"
                    >2024-08-13 15:47:52</span
                  >
                </p>
                <p  class="r-desc">
                  看了您的博客，感觉该抛弃我那vitepress搭建的静态站点了，首页映入眼帘的canvas真吸引人，虽然canvas的代码一点看不懂，计划借助博主的源码参考着写一个自己的，都是大佬
                </p>
              </div>
            </li>
            <li  class="basic-item">
              <span
                
                class="ant-avatar ant-avatar-circle ant-avatar-icon"
                style="width: 40px; height: 40px; line-height: 40px; font-size: 20px"
                ><i
                  
                  class="iconfont icon-customer-bussinessman"
                  style="font-size: 1.6rem"
                ></i
              ></span>
              <div  class="item-r">
                <p  class="r-t">
                  <span  class="r-t-name" style="padding-right: 10px"
                    >前端小白</span
                  ><span  class="r-t-time"
                    >2024-06-17 16:18:41</span
                  >
                </p>
                <p  class="r-desc">
                  您开源的几个项目的源码我都粗略学习了，收获颇多，其中有些页面效果、代码写法我也运用到我自己的项目中增色不少。希望作者后续开源更多好的作品。
                </p>
              </div>
            </li>
            <li  class="more-msg">
              <i  class="iconfont icon-click"></i> 查看更多
            </li>
          </ul>
        </div>
      </section> -->
    </section>
  </section>
</template>

<script setup>

const isTrans = ref(false)

window.addEventListener('scroll', (e) => {
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  console.log('scrollTop', scrollTop)
  console.log('clientHeight', clientHeight)
  console.log(scrollTop >  clientHeight)
  if( scrollTop >  clientHeight){
    isTrans.value = true;
  } else {
    isTrans.value = false;
  }
})
</script>

<style lang="scss" scoped>
.main-content {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  transition: all 0.4s linear;
  z-index: 10;
  position: relative;
}

.container-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sidebar-avatar{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
}

.sidebar-avatar-img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
}

.tranY-40{
  transform: translateY(-40%);
  transition-property: transform;
  transition-duration: 0.5s;
}

</style>
