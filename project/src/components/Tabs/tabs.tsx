import {useState} from 'react';
import {FilmType} from '../../types/film-type';
import OverviewTab from './Overview-tab';
import DetailsTab from './Details-tab';
import ReviewsTab from './Reviews-tab';
import {TabNames} from '../../utils/const';
import TabsHeader from './tabs-header';

type TabsProps = {
  film: FilmType | null;
}

export default function Tabs({film}: TabsProps) {
  const [activeTab, setActiveTab] = useState(TabNames.Overview);

  const tabMap = {
    [TabNames.Overview]: <OverviewTab film={film}/>,
    [TabNames.Details]: <DetailsTab film={film}/>,
    [TabNames.Reviews]: <ReviewsTab/>,
  };

  return (
    <div className="film-card__desc">
      <TabsHeader activeTab={activeTab} onChangeTab={setActiveTab}/>

      {tabMap[activeTab]}
    </div>
  );
}
