package Barrierfree.TravelPlanner.model;

import java.util.List;

public class ApiResponse {
    private Response response;

    public Response getResponse() {
        return response;
    }

    public void setResponse(Response response) {
        this.response = response;
    }

    public static class Response {
        private Body body;
        private Header header;

        public Header getHeader() {
            return header;
        }

        public void setHeader(Header header) {
            this.header = header;
        }

        public Body getBody() {
            return body;
        }

        public void setBody(Body body) {
            this.body = body;
        }
    }

    public class Header {
        private String resultCode;
        private String resultMsg;
        public String getResultCode() {
            return resultCode;
        }
        public void setResultCode(String resultCode) {
            this.resultCode = resultCode;
        }
        public String getResultMsg() {
            return resultMsg;
        }
        public void setResultMsg(String resultMsg) {
            this.resultMsg = resultMsg;
        }
    
    }

    public static class Body {
        private Items items;
        private int numOfRows;
        private int pageNo;
        private int totalCount;

        public int getNumOfRows() {
            return numOfRows;
        }

        public void setNumOfRows(int numOfRows) {
            this.numOfRows = numOfRows;
        }

        public int getPageNo() {
            return pageNo;
        }

        public void setPageNo(int pageNo) {
            this.pageNo = pageNo;
        }

        public int getTotalCount() {
            return totalCount;
        }

        public void setTotalCount(int totalCount) {
            this.totalCount = totalCount;
        }

        public Items getItems() {
            return items;
        }

        public void setItems(Items items) {
            this.items = items;
        }
    }

    public static class Items {
        private List<Site> item;

        public List<Site> getItem() {
            return item;
        }

        public void setItem(List<Site> item) {
            this.item = item;
        }
    }
}