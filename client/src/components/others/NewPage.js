import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NewBlock = styled.div`
    flex: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const OverLay = styled.div`
    white-space: wrap;
    overflow-y: scroll;
`;

export default function NewPage() {
    const [data, setData] = useState(0);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        var url =
            "https://newsapi.org/v2/everything?" +
            "q=developer&" +
            "from=2019-07-30&" +
            "sortBy=popularity&" +
            "apiKey=d433f6e4f29e40beb60ae85e361e4536";
        async function fetchData() {
            try {
                var req = new Request(url);
                const result = await fetch(req);
                const resultjson = await result.json();
                const selectArticles = resultjson.articles.filter(
                    article => article.urlToImage
                );
                setData(selectArticles);
            } catch (error) {}
        }
        fetchData();
        return () => {};
    }, []);

    useEffect(() => {
        if (data) {
            const furtherSelected = differentRandomFour(data.length - 1).map(
                index => data[index]
            );
            setShowData(furtherSelected);
        }
    }, [data]);

    return (
        <div>
            {data ? (
                <>
                    <div
                        style={{
                            backgroundColor: "#039fc7",
                            backgroundImage: `url(${data[0].urlToImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "200px",
                            position: "relative",
                        }}
                    >
                        <OverLay
                            style={{
                                position: "absolute",
                                bottom: "0",
                                height: "80px",
                                width: "calc(100% - 10px)",
                                color: "#fff",
                                backgroundColor: "rgba(0,0,0,0.6)",
                                padding: "10px 5px",
                                fontWeight: "500",
                            }}
                        >
                            {`${data[0].title}`}
                            <p style={{ fontSize: "13px" }}>
                                {`${data[0].description.substring(0, 300)}`}
                                &nbsp;
                                <span>
                                    <a
                                        href={`${data[0].url}`}
                                        style={{ color: "#039fc7" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Read more
                                    </a>
                                </span>
                            </p>
                        </OverLay>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            margin: "10px 5px",
                            flexWrap: "wrap",
                            height: "230px",
                            overflowY: "scroll",
                        }}
                    >
                        {showData && data
                            ? showData.map(datas => (
                                  <NewBlock
                                      style={{
                                          display: "flex",
                                          margin: "7px 10px",
                                          flexBasis: "100%",
                                      }}
                                  >
                                      <div
                                          style={{
                                              backgroundColor: "#039fc7",
                                              backgroundImage: `url(${datas.urlToImage})`,
                                              backgroundSize: "cover",
                                              backgroundRepeat: "no-repeat",
                                              backgroundPosition: "center",
                                              width: "100px",
                                              height: "100px",
                                              marginRight: "5px",
                                          }}
                                      />

                                      <div style={{ marginTop: "8px" }}>
                                          {`${datas.title.substring(
                                              0,
                                              (datas.title + " ").lastIndexOf(
                                                  " ",
                                                  100
                                              )
                                          )}`}
                                          <p
                                              style={{
                                                  fontSize: "13px",
                                              }}
                                          >
                                              {`${datas.description.substring(
                                                  0,
                                                  150
                                              )}`}
                                              &nbsp;
                                              <span>
                                                  <a
                                                      href={`${datas.url}`}
                                                      style={{
                                                          color: "#039fc7",
                                                      }}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                  >
                                                      Read more
                                                  </a>
                                              </span>
                                          </p>
                                      </div>
                                  </NewBlock>
                              ))
                            : null}
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function differentRandomFour(max) {
    let newSet = new Map();
    let maxlength = 4;
    if (maxlength > max) maxlength = max;
    while (newSet.size < maxlength) {
        let num = getRandomInt(1, max);
        if (!newSet.has(num)) {
            newSet.set(num, num);
        }
    }
    return [...newSet.values()];
}
