import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Videos, Loader } from './'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { AiFillHeart } from 'react-icons/ai'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet, statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount },
  } = videoDetail

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="play">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="desc">
              <span className="title">{title}</span>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="count">
                <span className="view">์กฐํ์ : {viewCount}ํ</span>
                <span className="like">
                  <AiFillHeart /> {videoDetail.statistics?.likeCount}
                </span>
              </div>
            </div>
          </div>
          <div className="right side">
            <Videos videos={videos} layout="column" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts
