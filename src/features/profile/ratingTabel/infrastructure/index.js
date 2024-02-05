export const RatingData = elements => {
    console.log("🚀 ~ RatingData ~ elements:", elements?.data?.data?.user_rates)

    elements?.data?.data?.user_rates?.map(element => {
      if(element.rate_type.rate_type==="creativity"){
      const creativity =element.rate
      console.log("🚀 ~ RatingData ~ creativity:", creativity)
      }
      if(element.rate_type.rate_type==="tecnical"){
        const creativity =element.rate
        console.log("🚀 ~ RatingData ~ creativity:", creativity)
        }
    })

    return elements?.data?.data?.user_rates?.map(element => {

      return {

        creativity:element.email,
      }
    })
  }
