import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
  return (
    <div className="cars-card d-flex flex-column rounded-3 bg-white">
      <Skeleton height={240} />
      <div className="cars-card__body d-flex flex-column">
        <div className="cars-card__bio d-flex flex-column gap-2">
          <span className="cars-card__model text-black">
            <Skeleton />
          </span>
          <h1 className="cars-card__price mb-0 fs-6 lh-base fw-bold">
            <Skeleton />
          </h1>
          <p className="cars-card__description mb-0 fw-light">
            <Skeleton count={3} />
          </p>
        </div>
        <div className="cars-card__detail d-flex flex-column w-100">
          <div className="cars-card__detail-capacity d-flex align-items-center gap-2">
            <Skeleton width={20} height={20} circle={true} />
            <Skeleton containerClassName="w-100" width="100%" height={20} />
          </div>
          <div className="cars-card__detail-transmission d-flex align-items-center gap-2">
            <Skeleton width={20} height={20} circle={true} />
            <Skeleton containerClassName="w-100" width="100%" height={20} />
          </div>
          <div className="cars-card__detail-year d-flex align-items-center gap-2">
            <Skeleton width={20} height={20} circle={true} />
            <Skeleton containerClassName="w-100" width="100%" height={20} />
          </div>
        </div>
        <Skeleton height={38} />
      </div>
    </div>
  )
}

export default SkeletonCard;