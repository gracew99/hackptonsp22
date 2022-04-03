import React, { useEffect } from 'react'
import { useState } from 'react';
import useSWR from 'swr'


function ChatCard(props) {
    // const [preview, setPreview] = useState("")
    const containerId = props.chat.containerId
    // console.log(containerId)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    


        function fetcher(url) {
        return fetch(url, requestOptions).then(response => {console.log("calling"); return response.json()});
       }
       function fetcher1(url) {
        return fetch(url, requestOptions).then(response => {console.log("calling"); return response.json()});
       }

       let {data, error} = useSWR("https://api.botdoc.io/v1/module_container/messagereply/?recipient__container=" + containerId.toString(),fetcher, { refreshInterval: 1000 });

    //    const recipientId = data.results[0].recipient
       const recipientId = props.chat.otherRecipientId ? props.chat.otherRecipientId.toString() : props.chat.recipientId
        let swrResult = useSWR("https://api.botdoc.io/v1/module_container/recipient/" + recipientId,fetcher1, { refreshInterval: 1000 });
        const name = swrResult.data
        const err = swrResult.err


        if (error) return <div>failed to load</div>
        if (!data) return <div>loading...</div>
        

        if (err) return <div>failed to load</div>
        if (!name) return <div>loading...</div>

        
        // fetch("https://api.botdoc.io/v1/module_container/recipient/" + recipientId.toString(), requestOptions)
        // .then(response => response.json())
        // .then(data => {        
            // console.log(data)        
            // setPreview(data.first_name + " " + data.last_name + " : " + body)
            // console.log("HEYYY")
        // })
  

    function click() {
        // find container
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const id =  props.chat.recipientItemId
        console.log(id, props.chat)
        fetch("https://api.botdoc.io/v1/module_container/recipientitem/" + id + "/", requestOptions)
        .then(response => response.json())
        .then(data1 => {
            console.log(data1);
            props.setLink(data1.link)
        })

    }
    // function click() {
    // // create new containear
    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    // myHeaders.append("Content-Type", "application/json");
    // const body = JSON.stringify({
    //     page_type: "p2",
    //     callback_url: "http://0e18-140-180-240-87.ngrok.io/checkMessage"
    // })

    // var requestOptions = {
    // method: 'POST',
    // headers: myHeaders,
    // body: body,
    // redirect: 'follow'
    // };

    // fetch("https://api.botdoc.io/v1/module_container/container/", requestOptions)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     let containerId = data.id


    //     var myHeaders = new Headers();
    //     myHeaders.append("Accept", "application/json");
    //     myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    //     myHeaders.append("Content-Type", "application/json");

    //     const body = JSON.stringify({
    //         first_name: "Ty",
    //         last_name: "Gerr"
    //     })

    //     var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: body,
    //     redirect: 'follow'
    //     };
    //     // containerId = 1493002
    //     // recipient
    //     fetch("https://api.botdoc.io/v1/module_container/container/" + containerId + "/recipient/", requestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         const recipientId = data.id
    //         var myHeaders = new Headers();
    //         myHeaders.append("Accept", "application/json");
    //         myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    //         myHeaders.append("Content-Type", "application/json");

    //         const body = JSON.stringify({
    //             interface_class: "link",
    //             value: recipientId
    //         })
    
    //         var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: body,
    //         redirect: 'follow'
    //         };
    
    //         // recipient item
    //         fetch("https://api.botdoc.io/v1/module_container/recipient/" + recipientId + "/recipient_item/", requestOptions)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             var myHeaders = new Headers();
    //             myHeaders.append("Accept", "application/json");
    //             myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    //             myHeaders.append("Content-Type", "application/json");
        
    //             var requestOptions = {
    //             method: 'POST',
    //             headers: myHeaders,
    //             redirect: 'follow'
    //             };
    
    //             // send notification
    //             fetch("https://api.botdoc.io/v1/module_container/container/" + containerId + "/send_notification/", requestOptions)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //                 props.setLink(data[0].link)
    
    //             })
    //             .catch(error => console.log('error1', error));
    //         })
    //         .catch(error => console.log('error2', error));
            
    //     })
    //     .catch(error => console.log('error3', error));

    // })
    // .catch(error => console.log('error4', error));

    // // // cretae recipients

    
    // }
  return (
    <div onClick={click} style={{display: "flex", flex: "1", outline: "solid", padding: "2%"}}>
        <div style={{flex: "0.2", display: "flex", marginRight: "10%"}}>
            <img style={{ width: "120px", borderRadius: "100%" }} alt="pfp" src={props.chat.img}></img>
        </div>
        <div style={{display: "flex", flexDirection: "column", flex: "0.8"}}>
            <strong style={{paddingRight:"10%"}}>{props.chat.name}</strong>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}} >
                <div>
                
                    {/* {console.log("PREVIEW", data)} */}
                    {data && data.results.length > 0 ? name && <p style={{display: "inline"}}>{name.first_name} {name.last_name}: </p> : <p></p>}
                    {data && data.results.length > 0 ? <p style={{display: "inline"}}>{data.results[0].body}</p> : <p>No messages yet</p>}
                    {/* {console.log("NAME", name)} */}
                    {/* {preview === "" ? preview : props.chat.preview} */}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChatCard