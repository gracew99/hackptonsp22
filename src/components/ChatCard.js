import React from 'react'

function ChatCard(props) {
    
    
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
        const id = props.accountId === "0" ? props.chat.recipientItemId : props.chat.recipientItemId1
        fetch("https://api.botdoc.io/v1/module_container/recipientitem/" + id + "/", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            props.setLink(data.link)
        })

    }
    // function click() {
    // // create new containear
    // var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxODcsInVzZXJuYW1lIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJleHAiOjE2NDkxMzI2MjMsImVtYWlsIjoiNy5rbmlja3NmYW4uN0BnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0ODg3MzQyMywidHdvX2ZhY3Rvcl9hdXRoZW50aWNhdGlvbl9hdXRob3JpemVkIjp0cnVlLCJzdWJzY3JpcHRpb24iOm51bGwsImtleV9pZCI6IjhhYjQyNTYyLTEyYTYtNDFhYi1iODJjLTE1Yjc3ZmY4MGYzZCJ9.JsUYgIibx4SBgWoLyiLyJRt2aY6sqwaXZtIyMfGN-Ns");
    // myHeaders.append("Content-Type", "application/json");
    // const body = JSON.stringify({
    //     page_type: "p2"
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
    //     // containerId = 1492724

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
                    {props.chat.preview}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChatCard