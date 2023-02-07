import { cls } from '@/libs/utils';
import { tabType } from '@/pages/enter';

interface ITabBtnProps {
  tab: string;
  setTab: (tab: tabType) => void;
  name: 'Email' | 'Phone';
}

const TabBtn = ({ tab, setTab, name }: ITabBtnProps) => {
  const onTabClick = (type: tabType) => setTab(type);
  return (
    <button
      className={cls(
        'border-b-2 pb-4 text-sm font-medium',
        tab === name.toLowerCase()
          ? ' border-orange-500 text-orange-400'
          : 'border-transparent text-gray-500 hover:text-gray-400'
      )}
      onClick={() => onTabClick(name.toLowerCase() as tabType)}
    >
      {name}
    </button>
  );
};

export default TabBtn;
