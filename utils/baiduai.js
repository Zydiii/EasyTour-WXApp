/**
 * 调用百度EasyDL、OCR示例代码
 * 只提供了一个EasyDL、OCR接口的封装。可以根据自己的需求封装即可
 */
let accessToken = '24.7828c60374e1ab2346ee4ffdeb55902b.2592000.1578562023.282335-17989969';//自己的accessToken 根据实际情况可以进行封装 自动获取token
let easydlUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark';//替换自己训练且已经发布的接口地址
let easydlUrl1 = 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish';//替换自己训练且已经发布的接口地址
let easydlUrl2 = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal';//替换自己训练且已经发布的接口地址
let easydlUrl3 = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/plant';//替换自己训练且已经发布的接口地址
  
let ocrGenerallUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish';//OCR通用识别接口
let faceDetectUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish';//人脸检测V3版本
let faceDetectRequest = (detectData, image_type, face_field, callback) => {
  //拼接接口body参数
  let params = {
    image: detectData,
    image_type: image_type,
    face_field: face_field,
    max_face_num: 10
  }
  //发送接口请求
  wx.request({
    url: faceDetectUrl + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    success: function (res) {
      callback.success(res.data)
    },
    fail: function (res) {
      if (callback.fail)
        callback.fail()
    }
  })
}
//EasyDL接口 图片数据 返回结果条数 根据物体 分类 文本 请修改第二个参数哦
let easyDLRequest = (base64Img, topNum, callback) => {
  //拼接接口body参数
  let params = {
    //top_num:topNum,
    image: base64Img,
    //filter_threshold:0.95
  }
  //发送接口请求
  wx.request({
    url: easydlUrl + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      callback.success(res.data)
      console.log("chenggong")
    },
    fail: function (res) {
      console.log(res)
      if (callback.fail)
        callback.fail()
      console.log("shibai")
    }
  })
}

//EasyDL接口 图片数据 返回结果条数 根据物体 分类 文本 请修改第二个参数哦
let easyDLRequest2 = (base64Img, topNum, callback) => {
  //拼接接口body参数
  let params = {
    top_num:topNum,
    image: base64Img,
    //baike_num: 1
    //filter_threshold:0.95
  }
  //发送接口请求
  wx.request({
    url: easydlUrl2 + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      callback.success(res.data)
      console.log("chenggong")
    },
    fail: function (res) {
      console.log(res)
      if (callback.fail)
        callback.fail()
      console.log("shibai")
    }
  })
}

//EasyDL接口 图片数据 返回结果条数 根据物体 分类 文本 请修改第二个参数哦
let easyDLRequest3 = (base64Img, topNum, callback) => {
  //拼接接口body参数
  let params = {
    //top_num: topNum,
    image: base64Img,
    //baike_num: 1
    //filter_threshold:0.95
  }
  //发送接口请求
  wx.request({
    url: easydlUrl3 + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      callback.success(res.data)
      console.log("chenggong")
    },
    fail: function (res) {
      console.log(res)
      if (callback.fail)
        callback.fail()
      console.log("shibai")
    }
  })
}

//EasyDL接口 图片数据 返回结果条数 根据物体 分类 文本 请修改第二个参数哦
let easyDLRequest1 = (base64Img, topNum, callback) => {
  //拼接接口body参数
  let params = {
    top_num:topNum,
    image: base64Img,
    filter_threshold:0.95
  }
  //发送接口请求
  wx.request({
    url: easydlUrl1 + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      callback.success(res.data)
      console.log("chenggong")
    },
    fail: function (res) {
      console.log(res)
      if (callback.fail)
        callback.fail()
      console.log("shibai")
    }
  })
}

//OCR通用识别接口 图片base64 只是简单示例 别的参数如何封装建议自己学习一下JavaScript
let ocrGeneralRequestByImage = (base64Img, callback) => {
  //拼接接口body参数
  let params = {
    detect_direction: true,
    image: base64Img
  }
  //发送接口请求
  wx.request({
    url: ocrGenerallUrl + '?access_token=' + accessToken,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      callback.success(res.data)
    },
    fail: function (res) {
      if (callback.fail)
        callback.fail()
    }
  })
}
//暴露出去的接口
module.exports = {
  easyDLRequest: easyDLRequest,
  ocrGeneralRequestByImage: ocrGeneralRequestByImage,
  faceDetectRequest: faceDetectRequest,
  easyDLRequest1: easyDLRequest1,
  easyDLRequest2: easyDLRequest2,
  easyDLRequest3: easyDLRequest3
  
}