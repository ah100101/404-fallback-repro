export default function NestedPage({ slug }: any) {
  return <div>{slug} nested page</div>;
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
    paths: [],
    fallback: "blocking",
  };
}
