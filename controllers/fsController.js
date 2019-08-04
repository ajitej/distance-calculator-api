var fs = require('fs');
var distanceObj = require('distance-calculator-radians');
var sort = require('../utils/sort');

//const
const dublinCoord = {
    latitude: '53.339428',
    longitude: '-6.257664'
}

//get
exports.readFile = function(req, res) {
    let path = './' + req.params.file_name + '.txt';
    if (fs.existsSync(path)) {
        try{
            let data = fs.readFileSync(path, 'utf8');
            data = data && data.split('\n');
            let nearbyPeople = [];
            data.map((obj, index) => {
                let item = JSON.parse(obj)
                let dist = distanceObj.distanceCalculator(dublinCoord, {latitude: item.latitude, longitude: item.longitude});
                if (dist <= 100) {
                    nearbyPeople.push(item);
                }
            })
            nearbyPeople = sort.sortObjByKey(nearbyPeople);
            res.json({
                success: true,
                data: nearbyPeople
            })
        }catch(err) {
            console.error(err)
        }
    }else{
        res.json({
            success: false,
            data: {},
            body: 'File not found'
        })
    }
};