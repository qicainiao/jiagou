report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/backstop_default_mapqq_0_document_0_phone.png",
        "test": "../../../backstop_data/bitmaps_test/20171008-151322/backstop_default_mapqq_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_mapqq_0_document_0_phone.png",
        "label": "mapqq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.05",
          "analysisTime": 55,
          "getDiffImage": null
        },
        "diffImage": "../../../backstop_data/bitmaps_test/20171008-151322/failed_diff_backstop_default_mapqq_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../../../backstop_data/bitmaps_reference/backstop_default_mapqq_0_document_1_tablet.png",
        "test": "../../../backstop_data/bitmaps_test/20171008-151322/backstop_default_mapqq_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_mapqq_0_document_1_tablet.png",
        "label": "mapqq",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "error": "Reference file not found/Users/yuanzhijia/Desktop/yd-vue-ssr/backstop_data/bitmaps_reference/backstop_default_mapqq_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});