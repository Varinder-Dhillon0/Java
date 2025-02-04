public class leetcode28{
    public static void main(String[] args) {
        String haystack = "sadbutsad";
        String needle = "sad";
        if(haystack.length() < needle.length()){
            System.out.println(-1);
        }
        for(int i = 0; i <= haystack.length()-needle.length(); i++){
            if(haystack.substring(i, i+needle.length()).equals(needle)){
                System.out.println(i);
            }
        }
        System.out.println(-1);
    }
}