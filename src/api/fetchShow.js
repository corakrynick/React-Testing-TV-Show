import axios from 'axios'

export const fetchShow = () => {
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log("Error: ", err.message);
        return err;
    })
    
}

useEffect(() => {
    fetchShow()
    .then((res) => {
      setShow(res.data)
      setSeasons(formatSeasons(res.data._embedded.episodes))
    })
    .catch((err) => {});
  });

// useEffect(() => {
//     const fetchShow = () => {
//       axios
//         .get(
//           "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//         )
//         .then(res => {
//           setShow(res.data);
//           setSeasons(formatSeasons(res.data._embedded.episodes));
//         });
//     };
//     fetchShow();
//   }, []);
