import imgBack_about from '../images/BGGGG.png'
import React from 'react'
import RecipeReviewCard from '../component/BlogCard'
import RecipeReviewCard2 from '../component/BlogCard2'
import RecipeReviewCard3 from '../component/BlogCard3'
import RecipeReviewCard4 from '../component/BlogCard4'
import { Box } from '@mui/system'


export const News = () => {
    return (
        <section>
            <div className="news-wrapp">
                <h2>NEWS</h2>
                <Box mt={10} display="flex" gap={10} sx={{justifyContent:'center', flexWrap:'wrap', width:'80%'}}>
                    <Box>
                        <RecipeReviewCard />
                    </Box>
                    <Box>
                        <RecipeReviewCard2 />
                    </Box>
                    <Box>
                        <RecipeReviewCard3 />
                    </Box>
                    <Box>
                        <RecipeReviewCard4 />
                    </Box>
                </Box>

                
            </div>




            <img className="back-img-totem" src={imgBack_about} alt="background"></img>
        </section>
    )
}