class ApiFeatuers {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    };

    search() {
        const keyword = this.queryStr.keyword ? {
            "$or": [
                {
                    "name": {
                        $regex: this.queryStr.keyword,
                        $options: "i",  //for caseinsensitive accept both capital and small alphabet
                    }
                },
                {
                    "category": {
                        $regex: this.queryStr.keyword,
                        $options: "i",  //for caseinsensitive accept both capital and small alphabet

                    }
                },

            ]

        } : {};
        console.log(keyword)

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filtter() {
        const querycopy = { ...this.queryStr }  //make cpoy of this.queryStr

        //now remove fileds
        const removeFileds = ["keyword", "page", "limite", "pages"]
        removeFileds.forEach(key => delete querycopy[key])

        // Filtter for price and rating

        let queryStr = JSON.stringify(querycopy)  //convert object to string
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);



        this.query = this.query.find(JSON.parse(queryStr));
        return this; 

    }
    pagination(resultPerPage){
        const currentPage= Number(this.queryStr.page) ||1;

        const skip = resultPerPage* (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;

    }


}

module.exports = ApiFeatuers