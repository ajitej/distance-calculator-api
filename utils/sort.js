var sortData = {
    sortObjByKey: function(arrOfObj, key){
        return arrOfObj.sort(function(a, b){
            var keyA = new Date(a.user_id),
                keyB = new Date(b.user_id);
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
    }
}

module.exports = sortData;