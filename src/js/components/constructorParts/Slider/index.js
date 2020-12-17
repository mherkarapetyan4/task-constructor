import React, { useMemo, useState } from "react";
import { Button, Carousel, Col, Row, Typography } from "antd";
import useParts from "hooks/useParts";
import { PlusOutlined } from "@ant-design/icons";
import EditSlide from "./editSlide";
import styles from  "./Slider.css"

// const keys = ['url']

const Slider = ({ id, editable }) => {
    const { changePart, parts } = useParts();

    const FOUNDED = useMemo(() => {
        return parts.find(el => el.id === id);
    }, [id, parts]);
    const [slider, setSlider] = useState(FOUNDED);


    const renderSlides = () => {
        return slider.urls.map((el, i) => <div key={i} className={styles.sliderItem}>
            <img src={el.url} alt={i} width={'100%'}/>
            <Typography.Title>{el.text}</Typography.Title>
        </div>);
    };
    // const renderPrev
    const handleChange = (url, text, index) => {
        const buffSliders = [...slider.urls];
        buffSliders[index] = {
            url, text,
        };

        setSlider({ ...slider, urls: buffSliders });
    };
    return <Row justify={"center"} style={{background: "#ccc"}}>
        {
            (editable || (!editable && slider.urls.length < 1)) ?
                <Col xl={12}>

                    {
                        slider.urls.map((el, i) => <EditSlide key={i} image={el.url} text={el.text}
                                                              onChange={(u, t) => handleChange(u, t, i)
                                                              }
                                                              onDelete={() => {
                                                                  const buffSliders = [...slider.urls];
                                                                  buffSliders.splice(i, 1);
                                                                  setSlider({ ...slider, urls: buffSliders });
                                                              }
                                                              }
                        />)
                    }

                    <Col
                        onClick={() => setSlider({ ...slider, urls: [...slider.urls, { text: "", url: "" }] })}>
                        <PlusOutlined style={{ fontSize: 20 }}/>
                    </Col>
                    <Button onClick={() => {
                        changePart(id, { urls: slider.urls });
                    }
                    }>Сохранить</Button>
                </Col>
                :
                <Col xl={12}>
                    <Carousel swipeToSlide autoplay className={styles.SliderWrapper}>
                        {renderSlides()}
                    </Carousel>
                </Col>

        }
    </Row>;
};

export default Slider;
