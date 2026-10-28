---
id: ex-ch03-exponentielle-sommes-partielles
type: exercise
chapters: [3, 2]
title: Où sont les zéros des sommes partielles de exp et de sin ?
source: "Classique (zéros des sommes partielles de l'exponentielle, Hurwitz), adapté"
difficulty: 2
time: 25
tools: [ch03-hurwitz-zeros-locaux, ch02-rouche, ch03-convergence-uniforme-compacts, ch01-dalembert-gauss]
---
## Énoncé

Pour $n\ge0$ et $z\in\C$, on pose
$$
P_n(z)=\sum_{k=0}^n\frac{z^k}{k!},\qquad S_n(z)=\sum_{k=0}^n(-1)^k\frac{z^{2k+1}}{(2k+1)!}.
$$
1. Soit $R>0$. Montrer qu'il existe $N\in\N$ tel que, pour tout $n\ge N$, $P_n$ ne s'annule pas sur $\bar D(0,R)$.
2. Pour $n\ge1$, on note $\rho_n$ le plus petit module d'un zéro de $P_n$. Justifier que $\rho_n$ est bien défini et montrer que $\rho_n\to+\infty$.
3. Montrer que, pour $n\ge1$, $P_n$ a exactement $n$ zéros distincts.
4. Soient $m\in\N$ et $R_m=(m+\tfrac12)\pi$. Montrer qu'il existe $N$ tel que, pour tout $n\ge N$, $S_n$ a exactement $2m+1$ zéros (comptés avec multiplicité) dans $D(0,R_m)$. Montrer plus précisément que, pour tout $0<\eps<\pi/2$ et tout $n$ assez grand, chaque disque $D(k\pi,\eps)$, $|k|\le m$, contient exactement un zéro de $S_n$ et que $S_n$ n'a pas d'autre zéro dans $D(0,R_m)$.

## Indices

### Indice 1
Les polynômes $P_n$ et $S_n$ convergent vers des fonctions entières bien connues. Que dire de l'écart sur un compact ? Et que sait-on des zéros de la limite ?

### Indice 2
Pour 1 : minorer $|e^z|$ sur $\bar D(0,R)$ et majorer $|e^z-P_n(z)|$ par un reste de la série $\sum R^k/k!$. Pour 4 : théorème de Rouché sur $U=D(0,R_m)$ avec $g=\sin$, $f=S_n$ ; il faut une minoration de $|\sin|$ sur le cercle $C(0,R_m)$ : pourquoi ce cercle ne contient-il aucun zéro de $\sin$ ?

### Indice 3
Pour 3 : $P_n'=P_{n-1}$ et $P_n-P_{n-1}=z^n/n!$. Un zéro double $w$ annulerait à la fois $P_n$ et $P_n'$.

## Corrigé

**1.** Fixons $R>0$ et $z\in\bar D(0,R)$. D'une part $|e^z|=e^{\Re(z)}\ge e^{-R}$. D'autre part
$$
|e^z-P_n(z)|=\Bigl|\sum_{k>n}\frac{z^k}{k!}\Bigr|\le\sum_{k>n}\frac{R^k}{k!}=:\eps_n(R),
$$
où $\eps_n(R)$ est le reste d'ordre $n$ de la série convergente $\sum_k R^k/k!=e^R$ : $\eps_n(R)\to0$ en décroissant. Soit $N$ tel que $\eps_N(R)<e^{-R}$. Pour $n\ge N$ et $z\in\bar D(0,R)$,
$$
|P_n(z)|\ge|e^z|-|e^z-P_n(z)|\ge e^{-R}-\eps_n(R)\ge e^{-R}-\eps_N(R)>0.
$$
C'est le mécanisme de la preuve du théorème de Hurwitz ([[ch03-hurwitz-zeros-locaux]]) : la limite $\exp$ ne s'annule pas et la convergence est uniforme sur le compact $\bar D(0,R)$ ([[ch03-convergence-uniforme-compacts]]), donc les $P_n$ finissent par ne plus s'y annuler.

**2.** Pour $n\ge1$, $P_n$ est un polynôme de degré $n\ge1$ : il a au moins un zéro (d'Alembert–Gauss, [[ch01-dalembert-gauss]]) et au plus $n$ ; le minimum $\rho_n$ des modules de ses zéros, pris sur un ensemble fini non vide, existe. Soit $R>0$ et $N$ donné par la question 1 : pour $n\ge\max(N,1)$, aucun zéro de $P_n$ n'est dans $\bar D(0,R)$, donc $\rho_n>R$. Ceci valant pour tout $R$, $\rho_n\to+\infty$.

**3.** On a $P_n'=\sum_{k=1}^n\frac{z^{k-1}}{(k-1)!}=P_{n-1}$. Si $w$ était un zéro multiple de $P_n$, on aurait $P_n(w)=P_n'(w)=0$, donc
$$
\frac{w^n}{n!}=P_n(w)-P_{n-1}(w)=0,
$$
soit $w=0$ ; mais $P_n(0)=1\ne0$. Tous les zéros sont donc simples, et comme $P_n$ a $n$ zéros comptés avec multiplicité (d'Alembert–Gauss), il a exactement $n$ zéros distincts.

**4. Comptage dans $D(0,R_m)$.** Rappelons que $\sin z=0\iff e^{2iz}=1\iff z\in\pi\Z$ (zéros tous réels), et que ces zéros sont simples car $\sin'(k\pi)=\cos(k\pi)=\pm1\ne0$.

Appliquons le théorème de Rouché ([[ch02-rouche]]) avec $\Omega=\C$, $U=D(0,R_m)$ (donc $\bar U\subset\Omega$), bord $\Gamma=C(0,R_m)$ orienté positivement, $g=\sin$ et $f=S_n$, toutes deux entières (aucun pôle).

* *$g$ ne s'annule pas sur $\Gamma$* : un zéro $k\pi$ sur $\Gamma$ vérifierait $|k|\pi=(m+\frac12)\pi$, impossible pour $k$ entier. Comme $|\sin|$ est continue et $>0$ sur le compact $\Gamma$, elle y atteint son minimum $\mu>0$.
* *Convergence uniforme sur $\Gamma$* : pour $|z|=R_m$,
$$
|\sin z-S_n(z)|\le\sum_{k>n}\frac{R_m^{2k+1}}{(2k+1)!}\le\sum_{j>2n+1}\frac{R_m^{j}}{j!}=\eps_{2n+1}(R_m)\xrightarrow[n\to\infty]{}0.
$$
Soit $N$ tel que $\eps_{2n+1}(R_m)<\mu$ pour $n\ge N$. Alors, sur $\Gamma$, $|S_n-\sin|<\mu\le|\sin|$ ; en particulier $S_n$ ne s'annule pas sur $\Gamma$ (sinon $|\sin z|<|\sin z|$).

Toutes les hypothèses de Rouché sont vérifiées : $Z(S_n,U)=Z(\sin,U)$. Les zéros de $\sin$ dans $U$ sont les $k\pi$ avec $|k|\pi<(m+\frac12)\pi$, c'est-à-dire $|k|\le m$, tous simples : $Z(\sin,U)=2m+1$. Donc $S_n$ a exactement $2m+1$ zéros dans $D(0,R_m)$ pour $n\ge N$.

**Localisation.** Soit $0<\eps<\pi/2$ et $|k|\le m$. Sur le cercle $C(k\pi,\eps)$, $\sin$ ne s'annule pas : la distance d'un point de ce cercle à $k\pi$ vaut $\eps>0$, et à un autre $j\pi$ elle est $\ge\pi-\eps>0$. Le même raisonnement (minimum $\mu_k>0$ de $|\sin|$ sur ce cercle, convergence uniforme de $S_n$ vers $\sin$ sur ce compact, Rouché sur $U_k=D(k\pi,\eps)$) donne $N_k$ tel que $Z(S_n,U_k)=Z(\sin,U_k)=1$ pour $n\ge N_k$. Les disques $D(k\pi,\eps)$, $|k|\le m$, sont deux à deux disjoints ($2\eps<\pi$) et contenus dans $D(0,R_m)$ (car $|k|\pi+\eps<m\pi+\frac\pi2$). Pour $n\ge\max(N,N_{-m},\dots,N_m)$, ils contiennent donc à eux tous $2m+1$ zéros de $S_n$, soit **tous** les zéros de $S_n$ dans $D(0,R_m)$ : il n'y en a pas d'autre.

*Contrôle numérique* (pour $m=2$, $R_2=5\pi/2$) : $S_{10}$ a exactement $5$ zéros dans $D(0,5\pi/2)$, proches de $0,\pm\pi,\pm2\pi$, alors que $S_6$ en a encore $9$ : le rang $N$ dépend vraiment de $R$.

## Pièges et variantes

> ⚠️ Le théorème de Hurwitz (point 1) ne s'applique pas tel quel : il part de fonctions $f_n$ **sans zéros** et conclut sur la limite. Ici c'est l'inverse (la limite $\exp$ est sans zéro, les $P_n$ en ont) : on utilise la forme forte (Remarque III.2.3), ou directement l'inégalité triangulaire, ou Rouché.

* La conclusion de 1 est **locale** : $P_n$ a toujours des zéros (question 2), simplement ils s'enfuient à l'infini. Il n'existe aucun $n$ tel que $P_n$ ne s'annule pas sur $\C$.
* Pour Rouché, il faut l'inégalité **stricte** $|f-g|<|g|$ sur tout le bord et vérifier que le bord ne contient ni zéro ni pôle : d'où le choix du rayon $(m+\frac12)\pi$, à mi-chemin entre deux zéros de $\sin$. Avec $R=m\pi$, l'argument tombe.
* Variante par le principe de l'argument ([[ch02-principe-argument-domaine]]) : $S_n'/S_n\to\cos/\sin$ uniformément sur $\Gamma$ (Weierstraß pour les dérivées et minoration de $|S_n|$), donc $\frac1{2i\pi}\int_\Gamma S_n'/S_n\to\frac1{2i\pi}\int_\Gamma\cos/\sin$ ; une suite d'entiers convergente est stationnaire. C'est exactement la preuve du poly.
* Pour aller plus loin (théorème de Szegő, hors programme) : les zéros de $z\mapsto P_n(nz)$ s'accumulent sur la courbe $\{|z e^{1-z}|=1,\ |z|\le1\}$, d'où $\rho_n\sim\tau n$ avec $\tau\approx0{,}278$ solution de $\tau e^{1+\tau}=1$ (numériquement $\rho_{40}\approx12{,}1$) : les zéros partent à l'infini, mais seulement linéairement.
