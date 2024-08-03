<script setup lang="ts">
const title = "Artem Holinka - About me";
const description = "I'm a Senior Frontend Developer at Jiji, a leading online marketplace in Africa.";
const image = "/images/me.webp";

useServerSeoMeta({
	title,
	ogType: "article",
	ogTitle: title,
	description,
	ogDescription: description,
	ogImage: image,
	twitterCard: "summary_large_image",
	twitterTitle: title,
	twitterDescription: description,
	twitterImage: image,
});
</script>

<template>
	<NuxtLayout name="default">
		<article class="container">
			<ProseH2 id="about">👋 About me</ProseH2>
			<ProseP>
				I'm a Senior Frontend Developer at Jiji, a leading online marketplace in Africa with over 7 million monthly
				visitors. With over {{ new Date().getFullYear() - 2015 }} years of experience in web and mobile development,
				I’ve refined my skills in startups, outsourcing, and product companies across multiple sectors.
			</ProseP>
			<ProseP>
				I am passionate about creating user-centered products that are designed with attention to performance and
				security but also aligned with business goals.
			</ProseP>
			<ProseP>
				I also had the opportunity to participate in developer competitions and hackathons, both as a participant and as
				a judge, which further expanded my technical experience and problem-solving skills.
			</ProseP>

			<ProseH2 id="story">🎯 Personal Interests</ProseH2>
			<ProseP>
				When I’m not coding, you’ll find me traveling 🌎, playing football ⚽️ and table tennis 🏓. I’m lucky that my
				passion for web development aligns with my profession, and I love what I do 🥳.
			</ProseP>

			<ProseH2 id="story">💬 Let's talk</ProseH2>
			<ProseP>
				Besides, I am always willing to help others with career development, overcoming growth challenges, and
				facilitating smooth onboarding experiences. If you need advice or collaboration, feel free to
				<ProseA href="https://meander.so/m/artem-holinka" rel="nofollow noreferrer" blank>reach out</ProseA>!
			</ProseP>

			<ProseH2 id="find-or-contact">Find or contact me</ProseH2>
			<ProseP>
				<ProseUl>
					<ProseLi>
						<ProseA href="https://www.linkedin.com/in/artem-holinka/" rel="nofollow noreferrer" blank>LinkedIn</ProseA>
					</ProseLi>
					<ProseLi>
						<ProseA href="https://github.com/golinka" rel="nofollow noreferrer" blank>GitHub</ProseA>
					</ProseLi>
					<ProseLi>
						<ProseA href="mailto:artem.holinka@gmail.com" rel="nofollow noreferrer" blank>Email</ProseA>
					</ProseLi>
				</ProseUl>
			</ProseP>
		</article>
	</NuxtLayout>
</template>
