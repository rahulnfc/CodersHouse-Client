import React from 'react'
import { Link } from 'react-router-dom'
import { MyProfileCardContainer, Profile, CoverPhoto, ProfilePhoto, ProfileInfo, ProfileStats, Stats, VerticalLine, Views, HorizontalLine, ViewProfileLink } from './MyProfileCard.styles'


const MyProfileCard = () => {
    return (
        <MyProfileCardContainer>
            <Profile>
                <CoverPhoto>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9itY1GUI1WVOENlsO4joMDrqmL2ER-8tbSQ&usqp=CAU" alt="coverPhoto" />
                </CoverPhoto>
                <ProfilePhoto>
                    <img src="/assets/images/megha.jpeg" alt="profile" />
                </ProfilePhoto>
                <ProfileInfo>
                    <h1>Megha Prakash</h1>
                    <h2>Django Developer</h2>
                    <HorizontalLine />
                    <Views>
                        <p> No. of Views of Profile: </p>
                        <span>1.5k</span>
                    </Views>
                    <Views>
                        <p> No. of Views of Posts: </p>
                        <span>1.5k</span>
                    </Views>
                </ProfileInfo>
                <ProfileStats>
                    <Stats>
                        <p> <span>1.5k</span> <br /> Followers </p>
                    </Stats>
                    <VerticalLine />
                    <Stats>
                        <p> <span>1.5k</span> <br /> Following </p>
                    </Stats>
                </ProfileStats>
                <Link to="/my-profile" component={ViewProfileLink}>View Profile</Link>
            </Profile>
        </MyProfileCardContainer>
    )
}

export default MyProfileCard


