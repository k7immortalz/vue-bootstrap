<template>
  <div>
    <section class="hero_in general">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span>PropertyCare blog</h1>
        </div>
      </div>
    </section>
    <!--/hero_in-->

    <div class="container margin_60_35">
      <div class="row">
        <div class="col-lg-9">
          
          <article class="blog" v-for="article of articles" :key="article.slug">
            <div class="row no-gutters">
              <div class="col-lg-7">
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                >
                  <figure>
                    <img
                      v-if="article.img"
                      class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
                      :src="article.img"
                    />
                    <div class="preview"><span>Read more</span></div>
                  </figure>
                </NuxtLink>
              </div>
              <div class="col-lg-5">
                <div class="post_info">
                  <small> {{ article.updatedAt }}</small>
                  <h3>
                    <NuxtLink
                      :to="{
                        name: 'blog-slug',
                        params: { slug: article.slug },
                      }"
                      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
                    >
                      {{ article.title }}
                    </NuxtLink>
                  </h3>
                  <p>{{ article.description }}</p>
                  <ul>
                    <li>
                      <div class="thumb">
                        <img src="img/thumb_blog.jpg" alt="" />
                      </div>
                      {{ article.author.name }}
                    </li>
                    <li><i class="icon_comment_alt"></i> 20</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <!-- /article -->

          <!-- /article -->

          <nav aria-label="...">
            <ul class="pagination pagination-sm">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          <!-- /pagination -->
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
          <!-- <div class="widget">
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
          </div> -->
          <!-- /widget -->
        </aside>
        <!-- /aside -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();
    const tags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tags
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