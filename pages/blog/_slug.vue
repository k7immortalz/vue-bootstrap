<template>
  <div>
    <section class="hero_in general">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>PropertyCare blog</h1>
        </div>
      </div>
    </section>
    <div class="container margin_60_35">
      <div class="row">
        <div class="col-lg-9">
          <div class="bloglist singlepost">
            <p>
              <img
                :src="article.img"
                :alt="article.alt"
                class="absolute h-full w-full object-cover"
              />
            </p>
            <h1>{{ article.title }}</h1>
            <div class="postmeta">
              <ul>
                <li>
                  <a href="#"><i class="icon_folder-alt"></i> Collections</a>
                </li>
                <li>
                  <a href="#"
                    ><i class="icon_clock_alt"></i>
                    {{ formatDate(article.updatedAt) }}</a
                  >
                </li>
                <li>
                  <a href="#"><i class="icon_pencil-edit"></i> Admin</a>
                </li>
                <li>
                  <a href="#"><i class="icon_comment_alt"></i> (14) Comments</a>
                </li>
              </ul>
            </div>
            <!-- /post meta -->
            <div class="post-content">
              <nuxt-content :document="article" />
            </div>
            <!-- /post -->
          </div>
          <!-- /single-post -->

          <div id="comments">
            <h5>Comments</h5>
            <ul>
              <li>
                <div class="avatar">
                  <a href="#"><img src="img/avatar1.jpg" alt="" /> </a>
                </div>
                <div class="comment_right clearfix">
                  <div class="comment_info">
                    By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span
                      >|</span
                    ><a href="#">Reply</a>
                  </div>
                  <p>
                    Nam cursus tellus quis magna porta adipiscing. Donec et eros
                    leo, non pellentesque arcu. Curabitur vitae mi enim, at
                    vestibulum magna. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Sed sit amet sem
                    a urna rutrumeger fringilla. Nam vel enim ipsum, et congue
                    ante.
                  </p>
                </div>
                <ul class="replied-to">
                  <li>
                    <div class="avatar">
                      <a href="#"><img src="img/avatar2.jpg" alt="" /> </a>
                    </div>
                    <div class="comment_right clearfix">
                      <div class="comment_info">
                        By <a href="#">Anna Smith</a
                        ><span>|</span>25/10/2019<span>|</span
                        ><a href="#">Reply</a>
                      </div>
                      <p>
                        Nam cursus tellus quis magna porta adipiscing. Donec et
                        eros leo, non pellentesque arcu. Curabitur vitae mi
                        enim, at vestibulum magna. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus.
                        Sed sit amet sem a urna rutrumeger fringilla. Nam vel
                        enim ipsum, et congue ante.
                      </p>
                      <p>
                        Aenean iaculis sodales dui, non hendrerit lorem rhoncus
                        ut. Pellentesque ullamcorper venenatis elit idaipiscingi
                        Duis tellus neque, tincidunt eget pulvinar sit amet,
                        rutrum nec urna. Suspendisse pretium laoreet elit vel
                        ultricies. Maecenas ullamcorper ultricies rhoncus.
                        Aliquam erat volutpat.
                      </p>
                    </div>
                    <ul class="replied-to">
                      <li>
                        <div class="avatar">
                          <a href="#"><img src="img/avatar2.jpg" alt="" /> </a>
                        </div>
                        <div class="comment_right clearfix">
                          <div class="comment_info">
                            By <a href="#">Anna Smith</a
                            ><span>|</span>25/10/2019<span>|</span
                            ><a href="#">Reply</a>
                          </div>
                          <p>
                            Nam cursus tellus quis magna porta adipiscing. Donec
                            et eros leo, non pellentesque arcu. Curabitur vitae
                            mi enim, at vestibulum magna. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Sed sit amet sem a urna rutrumeger
                            fringilla. Nam vel enim ipsum, et congue ante.
                          </p>
                          <p>
                            Aenean iaculis sodales dui, non hendrerit lorem
                            rhoncus ut. Pellentesque ullamcorper venenatis elit
                            idaipiscingi Duis tellus neque, tincidunt eget
                            pulvinar sit amet, rutrum nec urna. Suspendisse
                            pretium laoreet elit vel ultricies. Maecenas
                            ullamcorper ultricies rhoncus. Aliquam erat
                            volutpat.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div class="avatar">
                  <a href="#"><img src="img/avatar3.jpg" alt="" /> </a>
                </div>

                <div class="comment_right clearfix">
                  <div class="comment_info">
                    By <a href="#">Anna Smith</a><span>|</span>25/10/2019<span
                      >|</span
                    ><a href="#">Reply</a>
                  </div>
                  <p>Cursus tellus quis magna porta adipiscin</p>
                </div>
              </li>
            </ul>
          </div>

          <hr />

          <h5>Leave a Comment</h5>
          <form>
            <div class="form-group">
              <input
                type="text"
                name="name"
                id="name2"
                class="form-control"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="email"
                id="email2"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="email"
                id="website3"
                class="form-control"
                placeholder="Website"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="comments"
                id="comments2"
                rows="6"
                placeholder="Message Below"
              ></textarea>
            </div>
            <div class="form-group">
              <button
                type="submit"
                id="submit2"
                class="btn_1 rounded add_bottom_30"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <!-- /col -->

        <aside class="col-lg-3">
          <div class="widget">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  name="search"
                  id="search"
                  class="form-control"
                  placeholder="Search..."
                />
              </div>
              <button type="submit" id="submit" class="btn_1 rounded">
                Search
              </button>
            </form>
          </div>
          <!-- /widget -->
          <div class="widget">
            <div class="widget-title">
              <h4>Recent Posts</h4>
            </div>
            <ul class="comments-list">
              <li>
                <div class="alignleft">
                  <a href="#0"><img src="img/blog-5.jpg" alt="" /></a>
                </div>
                <small>11.08.2016</small>
                <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
              </li>
              <li>
                <div class="alignleft">
                  <a href="#0"><img src="img/blog-6.jpg" alt="" /></a>
                </div>
                <small>11.08.2016</small>
                <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
              </li>
              <li>
                <div class="alignleft">
                  <a href="#0"><img src="img/blog-4.jpg" alt="" /></a>
                </div>
                <small>11.08.2016</small>
                <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
              </li>
            </ul>
          </div>
          <!-- /widget -->
          <div class="widget">
            <div class="widget-title">
              <h4>Blog Categories</h4>
            </div>
            <ul class="cats">
              <li>
                <a href="#">Admissions <span>(12)</span></a>
              </li>
              <li>
                <a href="#">News <span>(21)</span></a>
              </li>
              <li>
                <a href="#">Events <span>(44)</span></a>
              </li>
              <li>
                <a href="#">Focus in the lab <span>(31)</span></a>
              </li>
            </ul>
          </div>
          <!-- /widget -->
          <div class="widget">
            <div class="widget-title">
              <h4>Popular Tags</h4>
            </div>
               
			   <div
              v-for="tag of tags"
              :key="tag.slug"
              class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
            >
              <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
                <p
                  class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
                >
                  {{ tag.name }}
                </p>
              </NuxtLink>
            </div>
          </div>
          <!-- /widget -->
        </aside>
        <!-- /aside -->
      </div>
      <!-- /row -->
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })));
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      tags,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>