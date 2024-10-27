import Standings from './component/standings/standings';
import Hero from './component/hero/hero';
import Card from './component/card/card';
import CardGroup from './component/card-group/card-group';

import heroUrl from './asset/image/track.png';
import cardImage1 from './asset/image/driver.png';
import cardImage2 from './asset/image/guide.png';
import cardImage3 from './asset/image/data.png';

import Chart from './asset/icon/chart.svg?react';
import Play from './asset/icon/play.svg?react';

import './style/main.scss';

const App = () => {
    const cards = [
        {
            'linkUrl': 'https://www.redbullracing.com/',
            'imageUrl': cardImage1,
            'imageAlt': 'Image of a driver for the virtual lap',
            'title': 'Oracle Virtual Lap in Monza',
            'group': 'Virtual Lap',
            'time': '6 min read',
            'icon': <Play className="icon icon--card" />
        },
        {
            'linkUrl': 'https://www.youtube.com/',
            'imageUrl': cardImage2,
            'imageAlt': 'Image of a person from the strategy guide video',
            'title': 'Oracle Strategy Guide',
            'group': 'Oracle Strategy Guide',
            'time': '4 min',
            'icon': <Play className="icon icon--card" />
        },
        {
            'linkUrl': 'https://www.ft.com/',
            'imageUrl': cardImage3,
            'imageAlt': 'Image of a graph containing data',
            'title': 'Oracle Cloud Telemetry Data Checo',
            'group': 'Data',
            'time': '3 min read',
            'icon': <Chart className="icon icon--card" />
        }
    ];

    return (
        <>
            <Hero url={ heroUrl } title="Oracle in Practice">
                <CardGroup>
                    {
                        cards.map((card, index) => {
                            return <Card key={ index } imageUrl={ card.imageUrl } imageAlt={ card.imageAlt }
                                title={ card.title } groupName={ card.group } time={ card.time }
                                linkUrl={ card.linkUrl } icon={ card.icon } />
                        })
                    }
                </CardGroup>
            </Hero>
            <main>
                <div className="container">
                    <Standings />
                </div>
            </main>
        </>
    )
}

export default App
