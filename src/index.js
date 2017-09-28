import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AboutUsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            profiles: [
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/0.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/0.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/1.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/1.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/2.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/2.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/3.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/3.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/4.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/4.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/5.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/5.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/6.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/6.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/men/7.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
                {
                    thumbnail: 'https://randomuser.me/api/portraits/med/women/7.jpg',
                    description: 'Tumblr sriracha whatever tattooed, cray woke direct trade leggings pop-up asymmetrical actually man braid lumbersexual cornhole vegan. Raw denim poke microdosing man bun aesthetic church-key mustache blog godard PBR&B copper mug pabst.'
                },
            ],
            pane1: {
                image: "https://dummyimage.com/200x300/ffffff/a8a8a8.jpg&text=Pane+1",
                description: null
            },
            pane2: {
                image: "https://dummyimage.com/200x300/ffffff/a8a8a8.jpg&text=Pane+2",
                description: null
            },
            pane3: {
                image: "https://dummyimage.com/200x300/ffffff/a8a8a8.jpg&text=Pane+3",
                description: null
            }
        }
    }

    handleClick(profile) {
        this.setState({
            pane3: (this.state.pane2.description ? this.state.pane2 : this.state.pane3),
            pane2: (this.state.pane1.description ? this.state.pane1 : this.state.pane2),
            pane1: {
                image: profile.thumbnail,
                description: profile.description
            }
        });
    }

    render() {
        const thumbsList = this.state.profiles.map((profile) =>
            <img
                className="thumbnail"
                src={profile.thumbnail}
                onClick={() => {this.handleClick(profile)}}
            />
        );

        return (
            <div className="aboutUs">
                <div className="panes">
                    <div id="pane1">
                        <img src={this.state.pane1.image} />
                        <p>{this.state.pane1.description}</p>
                    </div>
                    <div id="pane2">
                        <img src={this.state.pane2.image} />
                        <p>{this.state.pane2.description}</p>
                    </div>
                    <div id="pane3">
                        <img src={this.state.pane3.image} />
                        <p>{this.state.pane3.description}</p>
                    </div>
                </div>
                <div className="thumbsList">
                    {thumbsList}
                </div>
            </div>
        );
    }
}

/*******************************/

ReactDOM.render(
    <AboutUsPage />,
    document.getElementById("root")
);