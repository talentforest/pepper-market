import CircleBtn from '@/components/button/circleBtn';
import Layout from '../../components/layout';
import type { NextPage } from 'next';
import IconBox from '@/components/iconBox';
import Tag from '@/components/tag';
import Link from 'next/link';
import useSWR from 'swr';
import { Post, User } from '@prisma/client';

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    curiosities: number;
  };
}

interface PostResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const Community: NextPage = () => {
  const { data } = useSWR<PostResponse>('/api/posts');

  return (
    <Layout hasTabBar title='동네생활'>
      <ul>
        {data?.posts.map((post) => (
          <li
            key={post.id}
            className='hover:bg-slate-100 p-4 pb-0 cursor-pointer'
          >
            <Link
              href={`/community/${post.id}`}
              className='flex flex-col items-start'
            >
              <Tag />
              <div className='mt-2 text-gray-700'>
                <span className='font-medium text-orange-500'>Q.</span>
                {post.question}
              </div>
              <div className='mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500'>
                <span>{post?.user.name}</span>
                <span>
                  {new Date(post?.createdAt).toLocaleDateString('ko')}
                </span>
              </div>
              <div className='mt-10 flex w-full space-x-5 border-y border-b-2 py-2 text-gray-700'>
                <IconBox
                  iconName='curiosity'
                  content={`궁금해요 ${post?._count.curiosities || 0}`}
                />
                <IconBox
                  iconName='comment'
                  content={`댓글 ${post?._count.answers || 0}`}
                />
              </div>
            </Link>
          </li>
        ))}
        <CircleBtn href='/community/write' from='community' fixed />
      </ul>
    </Layout>
  );
};

export default Community;
