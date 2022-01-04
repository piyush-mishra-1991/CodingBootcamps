import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[] a = {5, 10, 20, 100, 105};
        ArrayList<Integer> arl = new ArrayList<>();
        for(int i:a) arl.add(i);
        System.out.println(s.solve(arl,130));
    }
    public int solve(ArrayList<Integer> A, int B) {
        long totalSum = 0;
        for(int i: A) totalSum+=i*1L;
        if(B>totalSum) return A.size();

        int kMin = 0, kMax = A.size();
        int kBest = -1;
        while(kMin<=kMax){
            int kMid = kMin + (kMax-kMin)/2;
            if(isOK(A,B,kMid)){
                kBest = kMid;
                kMin=kMid+1;
            }
            else kMax=kMid-1;
        }
        return kBest;
    }

    private boolean isOK(ArrayList<Integer> A, int maxSubArrSum, int k){
        long runningSum = 0;
        for(int i=0; i<k;i++){
            runningSum+=A.get(i)*1L;
        }
        if(runningSum>maxSubArrSum) return false;
        for(int i=k;i<A.size();i++){
            runningSum+=(A.get(i)*1L-A.get(i-k)*1L)*1L;
            if(runningSum>maxSubArrSum) return false;
        }
        return true;
    }
}
