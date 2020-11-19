<template>
<div>
      <section class="hero_in general">
      <div class="wrapper">
        <div class="container">
          <h1 class="fadeInUp"><span></span> {{ tag.name }}</h1>
        </div>
      </div>
    </section>
  <!-- <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="tag.img"
        :alt="tag.name"
        class="absolute h-full w-full object-cover"
      />
    </div>

    <div class="overlay"></div>
    <div class="absolute top-32 left-32 right-32 text-white">
      <NuxtLink to="/"><Logo /></NuxtLink>
      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ tag.name }}
          </h1>
          <p class="mb-4 uppercase">{{ tag.description }}</p>

          <nuxt-content :document="tag" />
        </div>
      </div>
    </div>
    <div
      class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <NuxtLink to="/"
        ><p class="hover:underline">Back to All Articles</p></NuxtLink
      >
      <h3 class="mb-4 font-bold text-4xl">Articles tagged {{ tag.name }}:</h3>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="article.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="article.img"
              :alt="article.alt"
            />

            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ formatDate(article.updatedAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div> -->

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
                        <img src="img/thumb_blog1.jpg" alt="" />
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
          <div class="widget">
            <div class="widget-title">
              <h4>Popular Tags</h4>
            </div>
            <div
              v-for="tag of alltags"
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
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags: { $contains: tag.name } })
      .only(["title", "description", "img", "slug", "author"])
      .sortBy('createdAt', 'asc')
      .fetch()
      const alltags = await $content("tags", params.slug)
      .only(["name", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag,
      alltags
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
