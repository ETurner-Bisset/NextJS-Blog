import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h2>All Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
