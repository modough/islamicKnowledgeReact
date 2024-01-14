import './skeleton.css';
import ContentLoader from "react-content-loader"

const Skeleton = () => {
    return (
        <div className='skeletonDiv'>
            <ContentLoader
                speed={1}
                width={'100%'}
                height={'90%'}
                viewBox="0 0 300 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#FDF4EA"
                preserveAspectRatio="none"
            >
                <rect x="60" y="22" width="180" height="100" />
            </ContentLoader>
        </div>
    )
}

export default Skeleton