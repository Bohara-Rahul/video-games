import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import GameCardContainer from "./GameCardContainer"

const GameCardSkeleton = () => {
  return (
      <Card>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
      </Card>
    
  )
}

export default GameCardSkeleton