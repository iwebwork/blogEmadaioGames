import React, { useState } from "react";
import ListPostsUi from "../../ui/listPosts";
import { IPost } from "../../hooks/api/props";
import hookApi from "../../hooks/api";


const ListPostsView: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { post } = hookApi();
  const [postsFilter, setPostsFilter] = useState<IPost[]>([])
  const [isLoadPosts, setIsLoadPosts] = useState<boolean>(false);

  const fetchPosts = async () => {
    setIsLoadPosts(false);
    const result = (await post({ url: `/api/posts/getTable`, body: {} }));

    if (!result.isValid) {
      setPosts([]);
      setIsLoadPosts(false);
      return;
    }

    setPosts(result.data as IPost[]);
    setIsLoadPosts(true);
  }

  const filterPosts = (ptipoPostId: string) => {
    const data = posts
      .filter(s => s.tipoPostId === ptipoPostId);

    //TODO: ajudar para quando eu estiver logado
    if (process.env.NODE_ENV === 'production')
      setPostsFilter(data.filter(s => s.liberado === 1))
    else
      setPostsFilter(data);
  }

  React.useEffect(() => {
    if (!isLoadPosts)
      return;

    fetchPosts();
  }, [isLoadPosts]);

  React.useEffect(() => {
    if (!isLoadPosts)
      return;

    // filterPosts(tipo);
    filterPosts('1');
  }, [posts, isLoadPosts]);

  React.useEffect(() => {
    if (!isLoadPosts)
      return;

    setIsLoadPosts(true);
  }, [postsFilter, isLoadPosts])

  return <>
    {isLoadPosts &&
      <ListPostsUi posts={postsFilter} tipo={'1'} />
    }
  </>

}

export default ListPostsView;