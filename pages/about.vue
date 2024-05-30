<script setup lang="ts">
const title = "Artem Holinka - All about me";
const description =
	"I'm a Senior Frontend Developer at JIJI. It's a Ukrainian 🇺🇦 product IT company that creates E-Commerce products in Africa.";
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
			<ProseH1 id="about">About</ProseH1>
			<ProseImg src="/images/me.webp"></ProseImg>
			<ProseP> Hi there, I'm Artem 🖐.</ProseP>
			<ProseP>
				I'm a Senior Frontend Developer at <ProseA href="https://jiji.ng" blank>JIJI</ProseA>. It's a Ukrainian 🇺🇦
				product IT company that creates E-Commerce products in Africa.
			</ProseP>

			<ProseH2 id="story" icon="uil:linkedin">More about me</ProseH2>
			<ProseP>
				I have {{ new Date().getFullYear() - 2015 }} years of hands-on experience designing, developing, shipping, and
				maintaining web and mobile products across various industries, including Education, Digital Marketing, Real
				Estate, E-Commerce, Health Care, Fintech and Consulting. I have established myself as a business-oriented
				developer, focused on availability, performance, and security, with strong problem-solving skills 🧙.
			</ProseP>
			<ProseP>
				I have diversified experience, not just across industries, but also in different types of companies, such as
				startups, outsourcing firms, and product companies, and I have noticed the differences between them. I enjoy
				working with the latest technologies and strive to improve my skills every day to gain deep expertise 👨‍💻. At the
				same time, I use technologies for projects that align with the needs of the business.
			</ProseP>
			<ProseP>
				In addition, I have several hobbies and areas of interest. Web development is one of my passions, and I feel
				fortunate that it has become my profession 🥳. Apart from development, I enjoy traveling 🌎, playing and
				watching football ⚽️ and table tennis 🏓.
			</ProseP>

			<ProseH2 id="find-or-contact">Find or contact me</ProseH2>
			<ProseP>
				<ProseUl>
					<ProseLi><ProseA href="https://www.linkedin.com/in/artem-holinka/" blank>LinkedIn</ProseA></ProseLi>
					<ProseLi><ProseA href="https://github.com/golinka" blank>GitHub</ProseA></ProseLi>
					<ProseLi><ProseA href="mailto:artem.holinka@gmail.com" blank>Email</ProseA></ProseLi>
				</ProseUl>
			</ProseP>
		</article>
	</NuxtLayout>
</template>
