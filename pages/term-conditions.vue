<template>
    	<main>
		<section class="hero_in general">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>PropertyCare blog</h1>
				</div>
			</div>
		</section>
		<!--/hero_in-->

		<div class="container margin_60_35">

                    
					<div class="bloglist singlepost" v-for="terms of term" :key="terms.slug">

						<h1>{{terms.title}}</h1><br>

						<div class="post-content">
							<div class="dropcaps">
                                 <nuxt-content :document="terms" />
							</div>

						</div>
						<!-- /post -->
					</div>
					<!-- /single-post -->

				
				<!-- /col -->


			<!-- /row -->
		</div>
		<!-- /container -->
	</main>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const term = await $content("conditions", params.slug).fetch();
    return {
      term,
    };
  },

  };
</script>