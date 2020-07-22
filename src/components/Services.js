import React from "react";
import { FaCocktail, FaHighlighter, FaShuttleVan, FaBeer} from "react-icons/all";
import Title from './Title'
export default class Services extends React.Component{
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis!"
            },
            {
                icon: <FaHighlighter/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis!"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis!"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }

}