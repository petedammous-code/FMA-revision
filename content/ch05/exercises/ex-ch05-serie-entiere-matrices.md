---
id: ex-ch05-serie-entiere-matrices
type: exercise
chapters: [5, 1]
title: "Fonctions de matrices définies par une série entière : formule de Cauchy et différentielle"
source: "Inventé (sur le thème classique du calcul fonctionnel holomorphe ; la formule de la question 8 est la formule de Daletskii–Krein)"
difficulty: 4
time: 60
tools: [ch05-banach-series-absolument-convergentes, ch05-lef-banach-norme-algebre, ch05-serie-neumann, ch05-inversion-c-infini, ch05-integrale-fonctions-reglees, ch05-differentielle-def, ch05-vecteur-tangent-courbe, ch01-def-rayon-convergence, ch01-serie-entiere-holomorphe, ch01-serie-entiere-derivees-tout-ordre, ch01-estimees-cauchy, ch01-cauchy-formule-disque]
---
## Énoncé

**Cadre et rappels.** Soit $m\ge1$. On fixe une norme $|\cdot|$ sur $\C^m$ et l'on munit $\mathcal A=\Mat_m(\C)$ de la norme d'opérateur $\norm{A}=\sup_{|x|\le1}|Ax|$. On admet (ou l'on vérifie comme dans le cours pour $\mathcal L(E)$) que $\norm{AB}\le\norm A\,\norm B$, $\norm{I}=1$, et que $\mathcal A$ est complet (dimension finie) ; la série de Neumann et le Théorème V.5.7 s'appliquent mot pour mot dans $\mathcal A$. On regarde $\mathcal A$ comme un espace vectoriel normé **réel** (de dimension $2m^2$) : « différentiable » s'entend au sens du cours. On note $E_{ij}$ la matrice dont le seul coefficient non nul vaut $1$, en ligne $i$ et colonne $j$.

Pour $r>0$ et $G:C(0,r)\to\mathcal A$ continue, on pose $\int_{C(0,r)}G(z)\,dz=\int_0^{2\pi}G(re^{it})\,ire^{it}\,dt$ (intégrale d'une fonction continue à valeurs dans le Banach $\mathcal A$, ou, ce qui revient au même, coefficient par coefficient). On utilisera librement : la linéarité ; $\int B\,G(z)\,C\,dz=B\big(\int G(z)\,dz\big)C$ pour $B,C\in\mathcal A$ fixées ; $\int g(z)B\,dz=\big(\int g(z)\,dz\big)B$ pour $g$ continue à valeurs complexes ; la majoration $\norm{\int_{C(0,r)}G(z)\,dz}\le2\pi r\sup_{C(0,r)}\norm G$.

Soit $f(z)=\sum_{n\ge0}a_nz^n$ une série entière de rayon de convergence $R\in\,]0,+\infty]$, et $\Omega_R=\{A\in\mathcal A : \norm A<R\}$.

**Partie I — Définition.**

1. Montrer que pour $A\in\Omega_R$, la série $\sum_n a_nA^n$ converge dans $\mathcal A$. On note $F(A)$ sa somme (pour $f=\exp$, on note $F(A)=e^A$). Montrer que $F(A)$ commute avec $A$.
2. Soit $D=\mathrm{diag}(\lambda_1,\dots,\lambda_m)$. Montrer que $|\lambda_k|\le\norm D$ pour tout $k$, et que, si $D\in\Omega_R$, $F(D)=\mathrm{diag}(f(\lambda_1),\dots,f(\lambda_m))$. Montrer aussi que $F(PAP^{-1})=P\,F(A)\,P^{-1}$ si $P$ est inversible et $A,PAP^{-1}\in\Omega_R$.

**Partie II — Une formule de Cauchy matricielle.**

3. Soit $A\in\mathcal A$ et $r>\norm A$. Montrer que pour $|z|=r$, $zI-A$ est inversible, que
$$
R_A(z):=(zI-A)^{-1}=\sum_{n\ge0}z^{-n-1}A^n,\qquad \norm{R_A(z)}\le\frac1{r-\norm A},
$$
et que la série converge uniformément pour $z\in C(0,r)$.
4. Montrer que si $\norm A<r<R$,
$$
F(A)=\frac1{2i\pi}\int_{C(0,r)}f(z)\,R_A(z)\,dz .
$$

**Partie III — Différentiabilité.**

5. Soient $0<r<R$, $A$ avec $\norm A<r$, $M=\frac1{r-\norm A}$ et $H\in\mathcal A$ avec $\norm H<\frac1M$. Montrer que $\norm{A+H}<r$ et que, pour $|z|=r$,
$$
\norm{R_{A+H}(z)-R_A(z)-R_A(z)\,H\,R_A(z)}\le\frac{M^3\norm H^2}{1-M\norm H}.
$$
6. En déduire que $F$ est différentiable en tout point $A\in\Omega_R$, avec
$$
dF_A(H)=\frac1{2i\pi}\int_{C(0,r)}f(z)\,R_A(z)\,H\,R_A(z)\,dz\qquad(\norm A<r<R).
$$
7. Montrer que $dF_A(H)=\sum_{n\ge1}a_n\sum_{k=0}^{n-1}A^kHA^{n-1-k}$. En déduire que si $AH=HA$, alors $dF_A(H)=F_1(A)\,H$, où $F_1$ est associée de la même façon à la série dérivée $f'$. Application : dériver $t\mapsto e^{tA}$ ($t\in\R$).

**Partie IV — Le cas diagonal ; l'exponentielle.**

8. Soit $D=\mathrm{diag}(\lambda_1,\dots,\lambda_m)\in\Omega_R$. Montrer que $dF_D(E_{ij})=f^{[1]}(\lambda_i,\lambda_j)\,E_{ij}$, où
$$
f^{[1]}(\lambda,\mu)=\frac{f(\lambda)-f(\mu)}{\lambda-\mu}\ \text{ si }\lambda\ne\mu,\qquad f^{[1]}(\lambda,\lambda)=f'(\lambda).
$$
9. On prend $m=2$, $f=\exp$ et $A=\mathrm{diag}(0,2i\pi)$.
   a) Calculer $e^A$ et $d\exp_A(H)$ pour toute $H\in\mathcal A$. La différentielle $d\exp_A$ est-elle injective ? Comparer avec $H\mapsto e^AH$ et avec la question 7.
   b) Montrer que $e^{A+tE_{12}}=I$ pour tout $t\in\C$ (on pourra chercher $P_t$ inversible telle que $A+tE_{12}=P_tAP_t^{-1}$). Conclure que $\exp$ n'est injective sur aucun voisinage de $A$.

## Indices

### Indice 1
Partie I : séries absolument convergentes dans un espace complet, et $\norm{A^n}\le\norm A^n$. Partie II : écrire $zI-A=z\,(I-A/z)$ et reconnaître une série de Neumann ; puis intégrer terme à terme et reconnaître les coefficients $a_n$ dans une formule de Cauchy.

### Indice 2
Pour 5, écrire $zI-A-H=B\,(I-B^{-1}H)$ avec $B=zI-A$, développer $(I-B^{-1}H)^{-1}$ en série de Neumann et isoler les termes d'ordre $0$ et $1$ en $H$ (c'est le calcul de la preuve du Théorème V.5.7). Pour 6, appliquer la question 4 **avec le même $r$** à $A$ et à $A+H$, puis majorer l'intégrale.

### Indice 3
Pour 7, développer $R_A(z)HR_A(z)=\sum_{p,q\ge0}z^{-p-q-2}A^pHA^q$ (produit de deux séries absolument convergentes), regrouper selon $N=p+q$ et intégrer terme à terme. Pour 8, $R_D(z)$ est diagonale et $\mathrm{diag}(\alpha)\,E_{ij}\,\mathrm{diag}(\beta)=\alpha_i\beta_jE_{ij}$ ; décomposer $\frac1{(z-\lambda_i)(z-\lambda_j)}$ en éléments simples.

### Indice 4
Pour 9 b), $e_1$ est vecteur propre de $A+tE_{12}$ pour la valeur propre $0$ ; chercher un vecteur propre $(x,1)$ pour la valeur propre $2i\pi$.

## Corrigé

**1.** Par la norme d'algèbre et une récurrence, $\norm{A^n}\le\norm A^n$ (avec $A^0=I$, $\norm I=1$), donc $\norm{a_nA^n}\le|a_n|\,\norm A^n$. Comme $\norm A<R$, la série numérique $\sum|a_n|\norm A^n$ converge (convergence absolue d'une série entière strictement à l'intérieur du disque de convergence, [[ch01-def-rayon-convergence]]). La série $\sum a_nA^n$ est donc absolument convergente dans l'espace **complet** $\mathcal A$, donc convergente (Proposition V.1.1, [[ch05-banach-series-absolument-convergentes]]). Les sommes partielles $S_N=\sum_{n\le N}a_nA^n$ commutent avec $A$ ; comme $X\mapsto AX$ et $X\mapsto XA$ sont linéaires continues ($\norm{AX}\le\norm A\norm X$), on passe à la limite : $AF(A)=F(A)A$.

**2.** *Valeurs propres.* $De_k=\lambda_ke_k$, donc $|\lambda_k|\,|e_k|=|De_k|\le\norm D\,|e_k|$ et $|\lambda_k|\le\norm D$. *Diagonale.* $D^n=\mathrm{diag}(\lambda_1^n,\dots,\lambda_m^n)$, et la convergence dans $\mathcal A$ entraîne celle de chaque coefficient (en dimension finie, la forme linéaire « coefficient $(k,k)$ » est continue) : $F(D)=\mathrm{diag}\big(\sum_na_n\lambda_k^n\big)_k=\mathrm{diag}(f(\lambda_k))_k$, chaque série convergeant car $|\lambda_k|\le\norm D<R$. *Conjugaison.* $(PAP^{-1})^n=PA^nP^{-1}$, donc les sommes partielles vérifient $\sum_{n\le N}a_n(PAP^{-1})^n=P\big(\sum_{n\le N}a_nA^n\big)P^{-1}$ ; $X\mapsto PXP^{-1}$ étant continue, on passe à la limite.

**3.** Pour $|z|=r$, $\norm{A/z}=\norm A/r<1$. Par la série de Neumann ([[ch05-serie-neumann]] ; $\mathcal A$ complet), $I-A/z$ est inversible d'inverse $\sum_{n\ge0}(A/z)^n$ ; donc $zI-A=z(I-A/z)$ est inversible et
$$
(zI-A)^{-1}=\frac1z\sum_{n\ge0}\frac{A^n}{z^n}=\sum_{n\ge0}z^{-n-1}A^n,\qquad \norm{R_A(z)}\le\sum_{n\ge0}\frac{\norm A^n}{r^{n+1}}=\frac1r\cdot\frac1{1-\norm A/r}=\frac1{r-\norm A}.
$$
De plus $\sup_{|z|=r}\norm{z^{-n-1}A^n}\le\norm A^n/r^{n+1}$, terme général d'une série convergente : la série converge **normalement**, donc uniformément, sur $C(0,r)$ ($\mathcal A$ étant complet).

**4.** La fonction $f$ est holomorphe sur $D(0,R)$ ([[ch01-serie-entiere-holomorphe]]), donc continue et bornée sur le compact $C(0,r)$ ; soit $M_f=\sup_{C(0,r)}|f|$. D'après 3, $f(z)R_A(z)=\sum_nf(z)z^{-n-1}A^n$ avec $\sup_{|z|=r}\norm{f(z)z^{-n-1}A^n}\le M_f\norm A^n/r^{n+1}$ : convergence normale, donc uniforme, sur $C(0,r)$. La majoration $\norm{\int G}\le2\pi r\sup\norm G$ permet d'intégrer terme à terme (l'intégrale de la somme partielle tend vers l'intégrale de la somme ; c'est le passage à la limite uniforme dans les intégrales de fonctions réglées, [[ch05-integrale-fonctions-reglees]]) :
$$
\frac1{2i\pi}\int_{C(0,r)}f(z)R_A(z)\,dz=\sum_{n\ge0}\Big(\frac1{2i\pi}\int_{C(0,r)}\frac{f(z)}{z^{n+1}}\,dz\Big)A^n .
$$
Comme $f$ est holomorphe sur $D(0,R)\supset\bar D(0,r)$, la formule (I.7.1) en $z=0$ ([[ch01-estimees-cauchy]]) donne $\frac1{2i\pi}\int_{C(0,r)}\frac{f(z)}{z^{n+1}}dz=\frac{f^{(n)}(0)}{n!}$, qui vaut $a_n$ ([[ch01-serie-entiere-derivees-tout-ordre]]). La somme est donc $\sum a_nA^n=F(A)$.

**5.** $\norm{A+H}\le\norm A+\norm H<\norm A+(r-\norm A)=r$. Soit $|z|=r$ et $B=zI-A$, inversible avec $\norm{B^{-1}}\le M$ (question 3). Alors $zI-A-H=B\,(I-B^{-1}H)$ et $\norm{B^{-1}H}\le M\norm H<1$, donc (Neumann) $I-B^{-1}H$ est inversible et
$$
R_{A+H}(z)=(I-B^{-1}H)^{-1}B^{-1}=\sum_{k\ge0}(B^{-1}H)^kB^{-1}=B^{-1}+B^{-1}HB^{-1}+\sum_{k\ge2}(B^{-1}H)^kB^{-1}.
$$
Les deux premiers termes sont $R_A(z)+R_A(z)HR_A(z)$, et
$$
\Big\|\sum_{k\ge2}(B^{-1}H)^kB^{-1}\Big\|\le M\sum_{k\ge2}(M\norm H)^k=\frac{M\,(M\norm H)^2}{1-M\norm H}=\frac{M^3\norm H^2}{1-M\norm H}.
$$
(C'est exactement l'estimation de la preuve du Théorème V.5.7, [[ch05-inversion-c-infini]] : la différentielle de $X\mapsto X^{-1}$ en $B$ est $K\mapsto-B^{-1}KB^{-1}$, appliquée ici à $K=-H$.)

**6.** Soit $A\in\Omega_R$ ; choisissons $r$ avec $\norm A<r<R$ (par exemple $r=\frac{\norm A+R}2$ si $R<\infty$, $r=\norm A+1$ sinon), et $M$, $M_f$ comme ci-dessus. Posons
$$
L_A(H)=\frac1{2i\pi}\int_{C(0,r)}f(z)R_A(z)HR_A(z)\,dz .
$$
$L_A$ est linéaire en $H$ et $\norm{L_A(H)}\le\frac{2\pi r}{2\pi}M_fM^2\norm H$ : $L_A\in\mathcal L(\mathcal A;\mathcal A)$. Pour $\norm H\le\frac1{2M}$, la question 4 s'applique à $A$ et à $A+H$ **avec le même $r$** (question 5 : $\norm{A+H}<r$), donc
$$
F(A+H)-F(A)-L_A(H)=\frac1{2i\pi}\int_{C(0,r)}f(z)\big[R_{A+H}(z)-R_A(z)-R_A(z)HR_A(z)\big]dz,
$$
et, par la question 5 (avec $1-M\norm H\ge\frac12$),
$$
\norm{F(A+H)-F(A)-L_A(H)}\le r\,M_f\,\frac{M^3\norm H^2}{1-M\norm H}\le2rM_fM^3\norm H^2=o(H).
$$
Par la définition [[ch05-differentielle-def]], $F$ est différentiable en $A$ et $dF_A=L_A$ (l'unicité de la différentielle montre au passage que $L_A$ ne dépend pas du $r$ choisi).

**7.** *Développement.* Fixons $\norm A<r<R$ et $|z|=r$, et notons $\rho=\norm A/r<1$. Le terme $z^{-p-q-2}A^pHA^q$ a une norme au plus $\rho^{p+q}\norm H/r^2$. Posons $T_N=\sum_{p+q=N}A^pHA^q$, de norme au plus $(N+1)\norm A^N\norm H$. Le produit des sommes partielles d'ordre $P$ de $R_A(z)$, $\big(\sum_{p\le P}z^{-p-1}A^p\big)H\big(\sum_{q\le P}z^{-q-1}A^q\big)$, tend vers $R_A(z)HR_A(z)$ (continuité de $(X,Y)\mapsto XHY$) et diffère de $\sum_{N\le P}z^{-N-2}T_N$ par des termes avec $p+q>P$, de norme totale au plus $\frac{\norm H}{r^2}\sum_{N>P}(N+1)\rho^N\to0$. D'où
$$
R_A(z)HR_A(z)=\sum_{N\ge0}z^{-N-2}T_N,
$$
avec convergence normale sur $C(0,r)$ (après multiplication par $f(z)$ : terme majoré par $M_f(N+1)\rho^N\norm H/r^2$). On intègre terme à terme comme en 4, et la formule (I.7.1) donne $\frac1{2i\pi}\int_{C(0,r)}f(z)z^{-(N+1)-1}dz=a_{N+1}$ :
$$
dF_A(H)=\sum_{N\ge0}a_{N+1}T_N=\sum_{n\ge1}a_n\sum_{k=0}^{n-1}A^kHA^{n-1-k}.
$$
*Cas commutatif.* Si $AH=HA$, chaque $A^kHA^{n-1-k}$ vaut $A^{n-1}H$, donc $dF_A(H)=\big(\sum_{n\ge1}na_nA^{n-1}\big)H=F_1(A)H$, où $F_1$ est associée à $f'(z)=\sum_{n\ge1}na_nz^{n-1}$, de même rayon $R$ ([[ch01-serie-entiere-holomorphe]]), de sorte que $F_1(A)$ est bien défini.

*Application.* $\gamma(t)=e^{tA}$ est la composée de $t\mapsto tA$ (dérivée $A$) et de $\exp$ ($R=\infty$, $f'=\exp$). Par la règle de la chaîne ([[ch05-vecteur-tangent-courbe]]), $\gamma'(t)=d\exp_{tA}(A)$, et $A$ commute avec $tA$ : $\gamma'(t)=e^{tA}A=Ae^{tA}$ (question 1).

**8.** Soit $\norm D<r<R$. Pour $|z|=r$, on a $z\ne\lambda_k$ (car $|\lambda_k|\le\norm D<r$) et $R_D(z)=\mathrm{diag}\big(\frac1{z-\lambda_k}\big)_k$. Donc $R_D(z)E_{ij}R_D(z)=\frac{1}{(z-\lambda_i)(z-\lambda_j)}E_{ij}$ et, par la question 6,
$$
dF_D(E_{ij})=c_{ij}\,E_{ij},\qquad c_{ij}=\frac1{2i\pi}\int_{C(0,r)}\frac{f(z)}{(z-\lambda_i)(z-\lambda_j)}\,dz .
$$
Ici $f$ est holomorphe sur $D(0,R)\supset\bar D(0,r)$ et $\lambda_i,\lambda_j\in D(0,r)$.

* Si $\lambda_i\ne\lambda_j$ : $\frac1{(z-\lambda_i)(z-\lambda_j)}=\frac1{\lambda_i-\lambda_j}\Big(\frac1{z-\lambda_i}-\frac1{z-\lambda_j}\Big)$, et la formule de Cauchy sur le disque ([[ch01-cauchy-formule-disque]]) donne $c_{ij}=\frac{f(\lambda_i)-f(\lambda_j)}{\lambda_i-\lambda_j}$.
* Si $\lambda_i=\lambda_j=\lambda$ : la formule (I.7.1) avec $n=1$ ([[ch01-estimees-cauchy]]) donne $c_{ij}=\frac1{2i\pi}\int_{C(0,r)}\frac{f(z)}{(z-\lambda)^2}dz=f'(\lambda)$.

Dans les deux cas $c_{ij}=f^{[1]}(\lambda_i,\lambda_j)$. (Alternative : formule des résidus, [[ch02-formule-residus]], avec deux pôles simples ou un pôle double.)

**9. a)** Par 2, $e^A=\mathrm{diag}(e^0,e^{2i\pi})=I$. La formule de 6 est $\C$-linéaire en $H$ ; par 8 :
$$
\begin{aligned}
d\exp_A(E_{11})&=\exp'(0)E_{11}=E_{11}, & d\exp_A(E_{22})&=e^{2i\pi}E_{22}=E_{22},\\
d\exp_A(E_{12})&=\frac{e^0-e^{2i\pi}}{0-2i\pi}E_{12}=0, & d\exp_A(E_{21})&=\frac{e^{2i\pi}-e^0}{2i\pi-0}E_{21}=0 .
\end{aligned}
$$
Donc $d\exp_A\begin{pmatrix}h_{11}&h_{12}\\h_{21}&h_{22}\end{pmatrix}=\begin{pmatrix}h_{11}&0\\0&h_{22}\end{pmatrix}$ : $d\exp_A$ **n'est pas injective**, son noyau est formé des matrices à diagonale nulle (dimension réelle $4$). En revanche $e^AH=H$ : les deux diffèrent dès que $h_{12}\ne0$ ou $h_{21}\ne0$. Ce n'est pas en contradiction avec 7 : $AE_{12}=0$ alors que $E_{12}A=2i\pi E_{12}$, donc $A$ et $E_{12}$ ne commutent pas.

**9. b)** Soit $A_t=A+tE_{12}=\begin{pmatrix}0&t\\0&2i\pi\end{pmatrix}$ et $P_t=\begin{pmatrix}1&\frac{t}{2i\pi}\\0&1\end{pmatrix}$ (inversible, de déterminant $1$). On vérifie $A_tP_t=\begin{pmatrix}0&t\\0&2i\pi\end{pmatrix}=P_tA$, donc $A_t=P_tAP_t^{-1}$ et, par 2 ($R=\infty$), $e^{A_t}=P_te^AP_t^{-1}=I$. Pour tout voisinage $W$ de $A$, $\norm{A_t-A}=|t|\,\norm{E_{12}}\to0$, donc $W$ contient des $A_t$ avec $t\ne0$ : on a $A_t\ne A$ et $e^{A_t}=e^A$. L'exponentielle n'est injective sur aucun voisinage de $A$.

*Cohérence.* La courbe $t\mapsto A_t$ ($t$ réel) passe par $A$ en $t=0$ avec vecteur tangent $E_{12}$, et $\exp\circ A_t$ est constante : la règle de la chaîne redonne $d\exp_A(E_{12})=\frac{d}{dt}e^{A_t}\big|_{t=0}=0$, comme en a).

## Pièges et variantes

* Écrire $d\exp_A(H)=e^AH$ sans hypothèse de commutation : c'est faux en général (question 9 a)). La formule « $f'(A)H$ » n'est vraie que si $AH=HA$.
* À la question 6, utiliser deux cercles différents pour $A$ et pour $A+H$ : on ne pourrait plus soustraire les intégrandes. Il faut vérifier $\norm{A+H}<r$ (question 5) avant d'appliquer la question 4.
* Oublier que le Théorème V.5.7 et la série de Neumann demandent un espace **complet** (ici : dimension finie).
* Intervertir somme et intégrale sans le justifier : la convergence **uniforme** sur le cercle (normale, ici) est l'argument attendu.
* Variante : en dérivant de même la formule de 6, on montre que $F$ est de classe $C^\infty$ sur $\Omega_R$, avec $d^2F_A(H,K)=\frac1{2i\pi}\int f(z)\big(R_AHR_AKR_A+R_AKR_AHR_A\big)dz$.
* Variante : en $A=0$, la question 7 donne $d\exp_0=\mathrm{id}$ ; par le théorème d'inversion locale ([[ch06-inversion-locale]]), $\exp$ est un difféomorphisme d'un voisinage de $0$ sur un voisinage de $I$. La question 9 montre que cela tombe en défaut en d'autres points : $d\exp_A$ est inversible si et seulement si $f^{[1]}(\lambda_i,\lambda_j)\ne0$ pour tous $i,j$, c'est-à-dire (pour $A$ diagonale) si aucune différence $\lambda_i-\lambda_j$ n'est dans $2i\pi\Z\setminus\{0\}$.
