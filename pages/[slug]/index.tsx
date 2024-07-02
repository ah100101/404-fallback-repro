export default function DynamicPage({ slug }: any) {
  return <h1>{slug}</h1>;
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "us" } }, { params: { slug: "uk" } }],
    fallback: "blocking",
  };
}
