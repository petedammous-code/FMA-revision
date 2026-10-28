---
id: ch03-log-estimation
type: lemma
chapter: 3
title: Estimation $|\mathrm{Log}(1+\omega)|\le C|\omega|$ près de $0$
ref: non numéroté, section III.5, p. 68
page: 68
importance: 1
depends: [ch02-logarithme-determination-principale-def, ch01-serie-entiere-holomorphe]
tags: [logarithme, estimation, produits-infinis, determination-principale]
---
## Intuition

> 💡 Près de $\omega=0$, $\mathrm{Log}(1+\omega)\approx\omega$ : le logarithme « se comporte comme l'identité » au voisinage de $1$. Tant qu'on reste à distance $\le 1/2$ de $0$ (donc loin du point dangereux $\omega=-1$ où $\mathrm{Log}(1+\omega)$ explose), on a même une inégalité **linéaire** $|\mathrm{Log}(1+\omega)|\le C|\omega|$.

C'est le petit outil qui transforme un **produit** $\prod(1+f_j)$ en une **série** $\sum \mathrm{Log}(1+f_j)$ dont on contrôle la convergence normale par celle de $\sum f_j$ ([[ch03-produits-infinis]]).

Ici $\mathrm{Log}$ est la **détermination principale du logarithme** sur $\C\setminus\R_-$ : $\mathrm{Log}(re^{i\theta})=\log r+i\theta$ pour $r>0$, $\theta\in\,]-\pi,\pi[$ ([[ch02-logarithme-determination-principale-def]]) ; elle vérifie $e^{\mathrm{Log}(w)}=w$.

## Énoncé

**Lemme (poly, section III.5, p. 68, non numéroté).** Il existe une constante $C>0$ telle que
$$
|\mathrm{Log}(1+\omega)|\le C\,|\omega|\qquad\text{pour tout }\omega\in D(0,1/2).
$$
On peut prendre $C=2\log 2\ (\approx1{,}386)$, et a fortiori $C=2$.

**Conséquence (utilisée dans la preuve du Théorème III.5.1).** Soient $K$ un compact, $(f_k)_{k\ge m}$ des fonctions sur $K$ avec $\sup_K|f_k|<1/2$ pour $k\ge m$ et $M:=\sum_{k\ge m}\norm{f_k}_{\infty,K}<+\infty$. Posons $g_k=1+f_k$. Alors $|g_k|>1/2$ sur $K$ et, pour tout $n\ge m$ et tout $z\in K$,
$$
\Big|\prod_{k=m}^n g_k(z)\Big|=e^{\Re\sum_{k=m}^n\mathrm{Log}(1+f_k(z))}\ \ge\ e^{-CM}>0 .
$$

## Hypothèses

### H1 — $|\omega|<1/2$

**Rôle.** Garantit que $1+\omega\in D(1,1/2)\subset\C\setminus\R_-$ (donc $\mathrm{Log}(1+\omega)$ est défini) et que la série $\sum_{k\ge1}|\omega|^{k-1}/k$ est majorée uniformément, par sa valeur en $|\omega|=1/2$.

**Si on la retire.** Sur tout le disque $D(0,1)$, aucune constante ne convient : pour $\omega=-1+\eps$ ($0<\eps<1$ réel), $|\mathrm{Log}(1+\omega)|/|\omega|=|\log\eps|/(1-\eps)\to+\infty$ quand $\eps\to0^+$. En revanche le rayon $1/2$ n'a rien de magique : pour tout $r\in\,]0,1[$, on a $|\mathrm{Log}(1+\omega)|\le C_r|\omega|$ sur $D(0,r)$ avec $C_r=-\log(1-r)/r$ (même preuve).

## Idée de la preuve

Sur $D(0,1)$, $\mathrm{Log}(1+\omega)=\sum_{k\ge1}(-1)^{k-1}\omega^k/k$. On majore terme à terme : $|\mathrm{Log}(1+\omega)|\le\sum_k|\omega|^k/k=|\omega|\sum_k|\omega|^{k-1}/k\le|\omega|\sum_k 2^{1-k}/k=2\log2\cdot|\omega|$.

## Preuve

*Le poly énonce ce fait sans démonstration ; voici une preuve complète.*

**Étape 1 : développement en série.** Posons $L(\omega):=\sum_{k\ge1}(-1)^{k-1}\omega^k/k$. Cette série entière a pour rayon de convergence $1$ ; elle est holomorphe sur $D(0,1)$, de dérivée $L'(\omega)=\sum_{k\ge1}(-1)^{k-1}\omega^{k-1}=\dfrac1{1+\omega}$ ([[ch01-serie-entiere-holomorphe]]). La fonction $\varphi(\omega):=(1+\omega)e^{-L(\omega)}$ vérifie $\varphi'=e^{-L}-(1+\omega)L'e^{-L}=0$ sur le connexe $D(0,1)$ et $\varphi(0)=1$, donc $e^{L(\omega)}=1+\omega$. Pour $\omega\in D(0,1)$, on a $\Re(1+\omega)>0$, donc $1+\omega\in\C\setminus\R_-$ et $e^{\mathrm{Log}(1+\omega)}=1+\omega=e^{L(\omega)}$ : la fonction continue $\omega\mapsto\big(\mathrm{Log}(1+\omega)-L(\omega)\big)/(2i\pi)$ est à valeurs dans $\Z$ sur le connexe $D(0,1)$, donc constante, nulle en $\omega=0$ (car $\mathrm{Log}(1)=0=L(0)$). Ainsi $\mathrm{Log}(1+\omega)=L(\omega)$ sur $D(0,1)$.

**Étape 2 : majoration.** Pour $|\omega|<1/2$,
$$
|\mathrm{Log}(1+\omega)|\le\sum_{k\ge1}\frac{|\omega|^k}{k}=|\omega|\sum_{k\ge1}\frac{|\omega|^{k-1}}{k}\le|\omega|\sum_{k\ge1}\frac{(1/2)^{k-1}}{k}=|\omega|\cdot2\sum_{k\ge1}\frac{(1/2)^k}{k}=2\log2\cdot|\omega|,
$$
car $\sum_{k\ge1}x^k/k=-\log(1-x)$ pour $x\in[0,1[$ et $-\log(1/2)=\log2$. D'où le lemme avec $C=2\log2\le2$.

**Conséquence.** Si $|f_k(z)|<1/2$, alors $|g_k(z)|\ge1-|f_k(z)|>1/2$. Comme $e^{\mathrm{Log}(w)}=w$, on a $\prod_{k=m}^ng_k=\exp\big(\sum_{k=m}^n\mathrm{Log}(1+f_k)\big)$, et $|e^w|=e^{\Re w}$, donc
$$
\Big|\prod_{k=m}^ng_k(z)\Big|=e^{\Re\sum_{k=m}^n\mathrm{Log}(1+f_k(z))}\ge e^{-\sum_{k=m}^n|\mathrm{Log}(1+f_k(z))|}\ge e^{-C\sum_{k=m}^n|f_k(z)|}\ge e^{-CM}. \qquad\square
$$

## Preuve à trous

Sur $D(0,1)$, on a <trou indice="développement en série entière du logarithme au voisinage de 1">$\mathrm{Log}(1+\omega)=\sum_{k\ge1}(-1)^{k-1}\omega^k/k$</trou> (les deux membres sont des logarithmes de $1+\omega$, continus sur le connexe $D(0,1)$ et nuls en $0$). Pour $|\omega|<1/2$ :
$$
|\mathrm{Log}(1+\omega)|\le|\omega|\sum_{k\ge1}\frac{|\omega|^{k-1}}{k}\le|\omega|\sum_{k\ge1}\frac{(1/2)^{k-1}}{k}=C|\omega|,
$$
avec <trou indice="calculer la somme avec $\sum x^k/k=-\log(1-x)$">$C=2\log 2$</trou>. Pour la conséquence : $\big|\prod_{k=m}^n g_k\big|=\big|e^{\sum\mathrm{Log}(1+f_k)}\big|=$ <trou indice="module d'une exponentielle">$e^{\Re\sum_{k=m}^n\mathrm{Log}(1+f_k)}\ge e^{-C\sum_k|f_k|}\ge e^{-CM}$</trou>. $\square$

## Exemples

* **Valeur numérique.** Pour $\omega=-0{,}4$ : $|\mathrm{Log}(0{,}6)|=0{,}5108\ldots$ et $2\log2\cdot0{,}4=0{,}5545\ldots$ : l'inégalité est vérifiée, et presque optimale car le pire cas est $\omega\to-1/2$ réel ($|\log(1/2)|/(1/2)=2\log2$ exactement).
* **Produit numérique.** $\prod_{k\ge2}(1-1/k^2)$ : ici $f_k=-1/k^2$, $|f_k|\le1/4<1/2$, $M=\sum_{k\ge2}1/k^2=\pi^2/6-1\approx0{,}645$, donc tous les produits partiels sont $\ge e^{-2\log2\cdot0{,}645}\approx0{,}41$. Effectivement $\prod_{k=2}^n(1-1/k^2)=\frac{n+1}{2n}\to\frac12$.

## Pièges

* L'estimation est **locale** : elle est fausse près de $\omega=-1$ (et $\mathrm{Log}(1+\omega)$ n'est même pas défini pour $\omega\in\,]-\infty,-1]$).
* $\mathrm{Log}(z_1z_2)\ne\mathrm{Log}(z_1)+\mathrm{Log}(z_2)$ en général (égalité seulement modulo $2i\pi$) : on ne passe **jamais** par « $\mathrm{Log}$ du produit », toujours par « $\exp$ de la somme des $\mathrm{Log}$ », qui est exacte.
* La minoration $e^{-CM}$ ne vaut que pour la **queue** du produit ($k\ge m$) ; les premiers facteurs peuvent s'annuler.
