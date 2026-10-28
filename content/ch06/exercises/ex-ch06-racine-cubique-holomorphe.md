---
id: ex-ch06-racine-cubique-holomorphe
type: exercise
chapters: [6, 1, 2]
title: La racine d'une cubique, fonction holomorphe de son coefficient
source: "Inventé (fonctions implicites holomorphes ; formule trigonométrique de Viète pour la cubique)"
difficulty: 4
time: 80
tools: [ch06-fonctions-implicites, ch05-differentielles-partielles, ch01-c-derivable-ssi-df-c-lineaire, ch01-def-holomorphe, ch01-estimees-cauchy, ch01-primitive-locale, ch01-prolongement-analytique, ch02-logarithme-determination-principale-def, ch01-serie-entiere-holomorphe, ch01-polynomes-fractions-rationnelles, ch05-differentielle-nulle-constante]
---
## Énoncé

**Notations et rappels.** On identifie $\C$ à $\R^2$ ($a+ib\leftrightarrow(a,b)$) et $\C\times\C$ à $\R^2\times\R^2$. Pour $c\in\C$, on note $m_c:\C\to\C$, $\omega\mapsto c\,\omega$ ; c'est une application $\R$-linéaire de $\R^2$. Une fonction $f$ définie sur un ouvert $\Omega$ de $\C$ est **holomorphe** si elle est $\C$-dérivable en tout point, de dérivée $f'$ continue. Rappel : $f$ est $\C$-dérivable en $z$ si et seulement si elle est différentiable en $z$ (au sens réel) avec $df_z$ $\C$-linéaire, et alors $df_z=m_{f'(z)}$. Pour un polynôme $P(z,w)=\sum_{j,k}a_{jk}z^jw^k$ à coefficients complexes, on note $P_z$ et $P_w$ ses dérivées partielles **formelles** (par exemple $P_w=\sum_{j,k}k\,a_{jk}z^jw^{k-1}$). $\mathrm{Log}$ désigne la détermination principale du logarithme sur $\C\setminus\R_-$.

**Partie A — Fonctions implicites holomorphes.** Soit $P\in\C[z,w]$.

1. Montrer que $P$, vue comme application de $\R^2\times\R^2$ dans $\R^2$, est de classe $C^\infty$ et que ses différentielles partielles au point $(z,w)$ sont
$$
\frac{\partial P}{\partial z}(z,w)=m_{P_z(z,w)},\qquad \frac{\partial P}{\partial w}(z,w)=m_{P_w(z,w)} .
$$
À quelle condition $\frac{\partial P}{\partial w}(z,w)$ est-elle un isomorphisme de $\R^2$ ?
2. Soit $(z_0,w_0)\in\C^2$ tel que $P(z_0,w_0)=0$ et $P_w(z_0,w_0)\neq0$. Montrer qu'il existe $r,s>0$ et une fonction holomorphe $\varphi:D(z_0,r)\to D(w_0,s)$ telles que $\varphi(z_0)=w_0$ et que, pour $(z,w)\in D(z_0,r)\times D(w_0,s)$, $P(z,w)=0\iff w=\varphi(z)$, avec de plus
$$
P_w\big(z,\varphi(z)\big)\neq0\quad\text{et}\quad \varphi'(z)=-\frac{P_z(z,\varphi(z))}{P_w(z,\varphi(z))}\qquad(z\in D(z_0,r)).
$$

**Partie B — Une racine de $w^3-3w+z$.** Désormais $P(z,w)=w^3-3w+z$.

3. Montrer que la partie A s'applique au point $(0,0)$. On note $\varphi:D(0,r)\to D(0,s)$ la fonction obtenue : $\varphi(z)$ est « la » racine proche de $0$ de $w^3-3w+z$. Exprimer $\varphi'(z)$ à l'aide de $\varphi(z)$.
4. Montrer que $\varphi$ est impaire, puis que $\varphi(z)=\dfrac z3+\dfrac{z^3}{81}+\dfrac{z^5}{729}+O(z^7)$ quand $z\to0$.
5. Déterminer les $z\in\C$ pour lesquels le polynôme $w\mapsto P(z,w)$ a une racine multiple, et préciser ces racines.

**Partie C — Une formule close sur $D(0,2)$.** Pour $u\in D(0,1)$, on pose $\rho(u)=\exp\big(\tfrac12\mathrm{Log}(1-u^2)\big)$.

6. Justifier que $\rho$ est bien définie et holomorphe sur $D(0,1)$, ne s'annule pas, et vérifie $\rho(u)^2=1-u^2$ et $\rho(0)=1$. Montrer qu'il existe une unique fonction $A$ holomorphe sur $D(0,1)$ telle que $A'=1/\rho$ et $A(0)=0$.
7. Montrer que $\big(\rho(u)+iu\big)e^{-iA(u)}=1$ pour tout $u\in D(0,1)$, puis que $\sin A(u)=u$. Que vaut $A$ sur $]-1,1[$ ?
8. Pour $z\in D(0,2)$, on pose $\psi(z)=2\sin\Big(\dfrac{A(z/2)}{3}\Big)$. Montrer que $\psi$ est holomorphe sur $D(0,2)$, que $P(z,\psi(z))=0$ pour tout $z\in D(0,2)$, et que $\psi=\varphi$ au voisinage de $0$.
9. En déduire que le rayon de convergence $R$ de la série de Taylor de $\varphi$ en $0$ vérifie $R\ge2$, et que la somme de cette série est $\psi$ sur $D(0,2)$.

**Partie D — Le rayon vaut exactement 2.**

10. Montrer que $\psi(x)\in[0,1[$ pour $x\in[0,2[$ et que $\psi(x)\to1$ quand $x\to2^-$.
11. On suppose $R>2$ et l'on note $S$ la somme de la série de Taylor de $\varphi$ sur $D(0,R)$. Montrer que $S(z)^3-3S(z)+z=0$ et $S'(z)\big(3S(z)^2-3\big)+1=0$ pour tout $z\in D(0,R)$. Aboutir à une contradiction et conclure que $R=2$. Commenter le lien avec la question 5.

## Indices

### Indice 1
Partie A : le théorème des fonctions implicites réel donne une fonction $C^\infty$. L'holomorphie se lit sur la **différentielle**, en appliquant le critère « $\C$-dérivable $\iff$ $df_z$ est $\C$-linéaire ». Parties C et D : la fonction implicite n'est donnée que sur un petit disque. Pour la prolonger, on la reconnaît dans une formule close (formule de Viète $\sin3\alpha=3\sin\alpha-4\sin^3\alpha$), et pour borner le rayon on cherche où l'hypothèse $P_w\ne0$ casse.

### Indice 2
Question 2 : [[ch06-fonctions-implicites]] avec $E=F=G=\R^2$. On a $\frac{\partial P}{\partial w}(z_0,w_0)=m_{P_w(z_0,w_0)}$, de déterminant $|P_w(z_0,w_0)|^2\neq0$. Puis $d\varphi_z=-m_{P_w}^{-1}\circ m_{P_z}=m_{-P_z/P_w}$. Question 4 : $z\mapsto-\varphi(-z)$ est une autre solution, à valeurs dans $D(0,s)$ ; utiliser l'unicité. Puis identifier les coefficients dans $3\varphi=z+\varphi^3$.

### Indice 3
Question 7 : dériver $q(u)=(\rho(u)+iu)e^{-iA(u)}$ en utilisant $\rho'=-u/\rho$. Question 9 : estimées de Cauchy ([[ch01-estimees-cauchy]]), la série de Taylor en $0$ d'une fonction holomorphe sur $D(0,2)$ converge sur $D(0,2)$. Question 11 : prolongement analytique ([[ch01-prolongement-analytique]]) pour l'équation sur $D(0,R)$, puis évaluer en $z=2$ en utilisant $S(2)=\lim_{x\to2^-}\psi(x)=1$.

## Corrigé

**Partie A.**

**1.** En coordonnées réelles $z=a+ib$, $w=c+id$, les parties réelle et imaginaire de $P$ sont des polynômes réels en $(a,b,c,d)$, donc $P$ est $C^\infty$ sur $\R^4$. Par définition ([[ch05-differentielles-partielles]]), $\frac{\partial P}{\partial w}(z,w)$ est la différentielle au point $w$ de $P(z,\cdot):\omega\mapsto P(z,\omega)$. Pour $z$ fixé, c'est un polynôme en $\omega$ à coefficients complexes, donc il est $\C$-dérivable en tout point, de dérivée $P_w(z,\omega)$ (règles de dérivation des polynômes, [[ch01-polynomes-fractions-rationnelles]]). D'après la Proposition I.2.3 ([[ch01-c-derivable-ssi-df-c-lineaire]], p. 7), sa différentielle réelle en $w$ est $m_{P_w(z,w)}$. Il en va de même en $z$.

Si $c=\alpha+i\beta$, la matrice de $m_c$ dans la base $(1,i)$ est $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$, de déterminant $\alpha^2+\beta^2=|c|^2$. Donc $\frac{\partial P}{\partial w}(z,w)$ est un isomorphisme si et seulement si $P_w(z,w)\neq0$, d'inverse $m_{1/P_w(z,w)}$.

**2.** *Hypothèses du théorème des fonctions implicites* ([[ch06-fonctions-implicites]], poly Théorème VI.2.1, p. 118), avec $E=F=G=\R^2$ (espaces de Banach), $U=V=\R^2$ et $f=P$ :
* $P$ est $C^\infty$, donc $C^1$ (question 1) ;
* $\frac{\partial P}{\partial w}(z_0,w_0)=m_{P_w(z_0,w_0)}$ est un isomorphisme (question 1), bicontinu car on est en dimension finie.

On obtient des ouverts $U_0\ni z_0$, $V_0\ni w_0$ et $\varphi:U_0\to V_0$ de classe $C^1$ tels que $\varphi(z_0)=w_0$ et, pour $(z,w)\in U_0\times V_0$, $P(z,w)=P(z_0,w_0)=0\iff w=\varphi(z)$.

*Réduction aux disques.* Soit $s>0$ tel que $D(w_0,s)\subset V_0$. L'application $z\mapsto P_w(z,\varphi(z))$ est continue et non nulle en $z_0$. Par continuité de $\varphi$, il existe donc $r>0$ tel que $D(z_0,r)\subset U_0$, $\varphi(D(z_0,r))\subset D(w_0,s)$ et $P_w(z,\varphi(z))\neq0$ sur $D(z_0,r)$. L'équivalence reste vraie sur $D(z_0,r)\times D(w_0,s)\subset U_0\times V_0$.

*Holomorphie.* La formule du théorème et la question 1 donnent, pour $z\in D(z_0,r)$,
$$
d\varphi_z=-\Big(\frac{\partial P}{\partial w}(z,\varphi(z))\Big)^{-1}\circ\frac{\partial P}{\partial z}(z,\varphi(z))=-m_{1/P_w(z,\varphi(z))}\circ m_{P_z(z,\varphi(z))}=m_{-P_z(z,\varphi(z))/P_w(z,\varphi(z))} .
$$
C'est une application $\C$-linéaire. Par [[ch01-c-derivable-ssi-df-c-lineaire]], $\varphi$ est $\C$-dérivable en $z$ et $\varphi'(z)=-P_z(z,\varphi(z))/P_w(z,\varphi(z))$. Cette expression est continue en $z$ (quotient de fonctions continues, dénominateur non nul), donc $\varphi$ est holomorphe sur $D(z_0,r)$ ([[ch01-def-holomorphe]]).

**Partie B.**

**3.** $P(0,0)=0$, $P_z=1$ et $P_w(z,w)=3w^2-3$, donc $P_w(0,0)=-3\neq0$ : la question 2 s'applique. Pour $z\in D(0,r)$,
$$
\varphi'(z)=-\frac{1}{3\varphi(z)^2-3}=\frac{1}{3\big(1-\varphi(z)^2\big)} .
$$
En particulier $\varphi'(0)=\frac13$.

**4.** *Imparité.* Posons $\chi(z)=-\varphi(-z)$ pour $z\in D(0,r)$ (disque symétrique). $\chi$ est holomorphe, et $\chi(z)\in D(0,s)$ car $D(0,s)$ est symétrique. De plus
$$
P(z,\chi(z))=-\varphi(-z)^3+3\varphi(-z)+z=-\big(\varphi(-z)^3-3\varphi(-z)+(-z)\big)=-P\big(-z,\varphi(-z)\big)=0 .
$$
Par l'équivalence de la question 2, $\chi(z)=\varphi(z)$ : $\varphi$ est impaire.

*Coefficients.* $\varphi$ est holomorphe, donc développable en série entière en $0$ ([[ch01-estimees-cauchy]]) : $\varphi(z)=\sum_{n\ge0}a_nz^n$ près de $0$. L'imparité impose $a_{2k}=0$ (unicité du développement), donc $\varphi(z)=a_1z+a_3z^3+a_5z^5+O(z^7)$. L'équation $P(z,\varphi(z))=0$ s'écrit $3\varphi(z)=z+\varphi(z)^3$, et
$$
\varphi(z)^3=a_1^3z^3+3a_1^2a_3z^5+O(z^7).
$$
En identifiant les coefficients de $z$, $z^3$, $z^5$ : $3a_1=1$, $3a_3=a_1^3$, $3a_5=3a_1^2a_3$. D'où $a_1=\frac13$, $a_3=\frac1{81}$ et $a_5=\frac19\cdot\frac1{81}=\frac1{729}$. Contrôle : $a_1=\varphi'(0)=\frac13$ (question 3), et un calcul exact par ordinateur (itération de $w\mapsto(z+w^3)/3$ sur les séries) donne $\frac13,\frac1{81},\frac1{729},\frac4{19683},\dots$

**5.** $w$ est racine multiple de $P(z,\cdot)$ si et seulement si $P(z,w)=0$ et $P_w(z,w)=0$. Or $P_w(z,w)=3(w^2-1)=0$ équivaut à $w=\pm1$, et alors $z=3w-w^3$, soit $z=2$ pour $w=1$ et $z=-2$ pour $w=-1$. On a $w^3-3w+2=(w-1)^2(w+2)$ et $w^3-3w-2=(w+1)^2(w-2)$. Les seules valeurs sont donc $z=2$ (racine double $1$, racine simple $-2$) et $z=-2$ (racine double $-1$, racine simple $2$). Pour tout autre $z$, les trois racines sont simples.

**Partie C.**

**6.** Pour $u\in D(0,1)$, $u^2\in D(0,1)$, donc $1-u^2\in D(1,1)\subset\{\Re>0\}\subset\C\setminus\R_-$. $\mathrm{Log}$ est holomorphe sur $\C\setminus\R_-$ (c'est une primitive de $1/z$, [[ch02-logarithme-determination-principale-def]]), et $u\mapsto1-u^2$ et $\exp$ sont holomorphes. Donc $\rho$ est holomorphe sur $D(0,1)$ et ne s'annule pas (c'est une exponentielle). Comme $\exp(\mathrm{Log}\,\zeta)=\zeta$, on a $\rho(u)^2=\exp\big(\mathrm{Log}(1-u^2)\big)=1-u^2$, et $\rho(0)=\exp(\frac12\mathrm{Log}\,1)=1$.

$1/\rho$ est holomorphe sur le **disque** $D(0,1)$, donc y admet une primitive holomorphe ([[ch01-primitive-locale]], poly Corollaire I.7.6, p. 22). Quitte à lui retrancher sa valeur en $0$, on obtient $A$ avec $A(0)=0$. Si $\tilde A$ en est une autre, $(A-\tilde A)'=0$ sur le connexe $D(0,1)$, donc $A-\tilde A$ est constante ([[ch05-differentielle-nulle-constante]]), nulle en $0$ : $A$ est unique.

**7.** En dérivant $\rho^2=1-u^2$, on obtient $2\rho\rho'=-2u$, soit $\rho'=-u/\rho$. Soit $q(u)=(\rho(u)+iu)\,e^{-iA(u)}$, holomorphe sur $D(0,1)$. Alors
$$
q'=\big(\rho'+i\big)e^{-iA}-iA'\,(\rho+iu)\,e^{-iA}=e^{-iA}\Big(-\frac u\rho+i-\frac{i\rho-u}{\rho}\Big)=e^{-iA}\Big(-\frac u\rho+i-i+\frac u\rho\Big)=0 .
$$
Sur le connexe $D(0,1)$, $q$ est donc constante, égale à $q(0)=1$ : $e^{iA}=\rho+iu$. Comme $(\rho+iu)(\rho-iu)=\rho^2+u^2=1$, on a $e^{-iA}=\rho-iu$, d'où
$$
\sin A(u)=\frac{e^{iA(u)}-e^{-iA(u)}}{2i}=\frac{2iu}{2i}=u\qquad\text{et}\qquad \cos A(u)=\rho(u).
$$
Sur $]-1,1[$, $1-u^2>0$, donc $\mathrm{Log}(1-u^2)=\ln(1-u^2)$ et $\rho(u)=\sqrt{1-u^2}$. La dérivée de $u\mapsto A(u)$ le long de $]-1,1[$ est $A'(u)=1/\sqrt{1-u^2}=\arcsin'(u)$, et $A(0)=0=\arcsin0$. Donc $A=\arcsin$ sur $]-1,1[$.

**8.** Si $z\in D(0,2)$, alors $z/2\in D(0,1)$. $\psi$ est la composée des fonctions holomorphes $z\mapsto z/2$, $A$, $\zeta\mapsto\zeta/3$ et $2\sin$ : elle est holomorphe sur $D(0,2)$. Posons $\alpha=A(z/2)/3$ et $\sigma=\sin\alpha$, de sorte que $\psi(z)=2\sigma$. L'identité $\sin3\alpha=3\sin\alpha-4\sin^3\alpha$ vaut pour tout $\alpha\in\C$ (identité entre fonctions entières, vraie sur $\R$, donc partout par [[ch01-prolongement-analytique]]). Elle donne
$$
\psi(z)^3-3\psi(z)=8\sigma^3-6\sigma=-2\big(3\sigma-4\sigma^3\big)=-2\sin(3\alpha)=-2\sin A(z/2)=-2\cdot\frac z2=-z,
$$
d'après la question 7. Donc $P(z,\psi(z))=0$ sur $D(0,2)$.

De plus $\psi(0)=2\sin0=0$. Par continuité de $\psi$ en $0$, il existe $r'\in\,]0,r]$ tel que $\psi(D(0,r'))\subset D(0,s)$. Pour $z\in D(0,r')$, $(z,\psi(z))\in D(0,r)\times D(0,s)$ et $P(z,\psi(z))=0$, donc $\psi(z)=\varphi(z)$ par l'équivalence de la question 2.

**9.** $\psi$ est holomorphe sur $\Omega=D(0,2)$, et $\sup\{t>0 : \bar D(0,t)\subset\Omega\}=2$. D'après le Corollaire I.7.5 ([[ch01-estimees-cauchy]], p. 22), la série de Taylor de $\psi$ en $0$ a un rayon de convergence $\ge2$ et sa somme vaut $\psi$ sur $D(0,2)$. Comme $\psi=\varphi$ sur $D(0,r')$, elles ont les mêmes dérivées en $0$, donc la même série de Taylor en $0$. D'où $R\ge2$, et la somme est $\psi$ sur $D(0,2)$.

Le théorème des fonctions implicites ne donnait $\varphi$ que sur un disque $D(0,r)$ de rayon inconnu. On sait maintenant que $\varphi$ se prolonge holomorphiquement à $D(0,2)$, en restant racine de $w^3-3w+z$.

**Partie D.**

**10.** Pour $x\in[0,2[$, $x/2\in[0,1[$ et $A(x/2)=\arcsin(x/2)\in[0,\pi/2[$ (question 7). Donc $A(x/2)/3\in[0,\pi/6[$ et, $\sin$ étant croissante sur $[0,\pi/2]$, $\psi(x)=2\sin\big(\arcsin(x/2)/3\big)\in[0,2\sin(\pi/6)[\,=[0,1[$. Comme $\arcsin$ est continue sur $[-1,1]$ avec $\arcsin1=\pi/2$, on a $\psi(x)\to2\sin(\pi/6)=1$ quand $x\to2^-$.

**11.** Supposons $R>2$. La somme $S$ est holomorphe sur $D(0,R)$ ([[ch01-serie-entiere-holomorphe]]) et $S=\psi$ sur $D(0,2)$ (question 9). La fonction $z\mapsto S(z)^3-3S(z)+z$ est holomorphe sur le connexe $D(0,R)$ et nulle sur $D(0,2)$ (question 8), qui a des points d'accumulation dans $D(0,R)$. Par prolongement analytique ([[ch01-prolongement-analytique]], p. 28), elle est nulle sur $D(0,R)$. En dérivant :
$$
3S(z)^2S'(z)-3S'(z)+1=0,\quad\text{soit}\quad S'(z)\big(3S(z)^2-3\big)+1=0\qquad(z\in D(0,R)).
$$
Or $2\in D(0,R)$ et $S$ est continue en $2$, donc $S(2)=\lim_{x\to2^-}S(x)=\lim_{x\to2^-}\psi(x)=1$ par la question 10. L'identité en $z=2$ donne alors $S'(2)\cdot0+1=0$ : contradiction. Donc $R\le2$, et finalement $R=2$.

*Lien avec la question 5.* En $z=2$, la branche $\varphi$ (prolongée) tend vers la racine **double** $w=1$ : deux racines de $w^3-3w+z$ se rejoignent, $P_w$ s'annule, et l'hypothèse du théorème des fonctions implicites tombe en défaut. La relation $\varphi'=1/(3(1-\varphi^2))$ montre d'ailleurs que $|\varphi'(x)|\to+\infty$ quand $x\to2^-$. Par imparité, il se passe la même chose en $z=-2$. Le rayon de convergence est la distance de $0$ aux valeurs critiques $\pm2$ où la branche considérée devient multiple.

## Pièges et variantes

* > ⚠️ Le théorème des fonctions implicites (réel) ne donne qu'une fonction $C^\infty$. L'holomorphie vient de la **$\C$-linéarité** de $d\varphi_z=-\big(\partial_wP\big)^{-1}\circ\partial_zP$, composée de multiplications complexes. Ne pas l'affirmer sans le dire.
* Le théorème est **local** : il ne dit rien sur la taille du disque $D(0,r)$. Le prolongement à $D(0,2)$ demande un argument global (ici une formule close ; on pourrait aussi utiliser le théorème de Rouché sur $C(0,1)$, où $|w^3-3w|\ge2$). Et c'est l'unicité du théorème qui permet d'identifier $\psi$ et $\varphi$.
* Toutes les valeurs critiques ne sont pas singulières pour **toutes** les branches. En $z=2$, la racine $w=-2$ est simple, et la branche qui y passe se prolonge holomorphiquement au voisinage de $2$. Il fallait donc savoir que **notre** branche tend vers $1$ (question 10), et pas vers $-2$.
* Ne pas confondre l'imparité de $\varphi$, qui vient de l'unicité, avec une propriété « évidente » : sans l'unicité dans $D(0,s)$, $-\varphi(-z)$ pourrait être une autre racine.
* Variante (formule de Lagrange, cf. [[ex-ch02-inversion-lagrange]]) : $w=z/(3-w^2)$ donne
$$
a_{2k+1}=\frac{1}{2k+1}\binom{3k}{k}3^{-3k-1},
$$
d'où $a_1=\frac13$, $a_3=\frac1{81}$, $a_5=\frac1{729}$, $a_7=\frac4{19683}$. Comme $\binom{3k}k^{1/k}\to\frac{27}4$, on a $|a_{2k+1}|^{1/(2k+1)}\to\frac12$, ce qui redonne $R=2$ par la formule de Cauchy–Hadamard.
* Variante : pour $P(z,w)=w^2-1-z$ et $(z_0,w_0)=(0,1)$, on obtient la racine carrée principale $\varphi(z)=\exp\big(\frac12\mathrm{Log}(1+z)\big)$, de rayon $1$ : la valeur critique est $z=-1$.
