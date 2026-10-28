---
id: ex-ch05-transposee-orthogonal
type: exercise
chapters: [5]
title: "L'application $A\mapsto{}^tA\,A$ et les courbes tracées dans le groupe orthogonal"
source: "Classique (différentielle de $A\mapsto {}^tAA$, première étape de l'étude de $O(n)$)"
difficulty: 1
time: 15
tools: [ch05-formule-leibniz, ch05-differentielle-bilineaire, ch05-differentielle-lineaire, ch05-lineaire-c-infini, ch05-classe-ck-def, ch05-differentielle-seconde-def, ch05-formule-pratique-dpf, ch05-vecteur-tangent-courbe]
---
## Énoncé

Soit $n\ge1$. On munit l'espace $\Mat_n(\R)$ des matrices carrées réelles de taille $n$ d'une norme quelconque. On note ${}^tA$ la transposée de $A$, $\Sym_n$ le sous-espace des matrices symétriques (${}^tS=S$), $\mathcal A_n$ celui des matrices antisymétriques (${}^tH=-H$), et $O(n)=\{A\in\Mat_n(\R)\ :\ {}^tAA=I_n\}$ le groupe orthogonal. On pose
$$
\Phi:\Mat_n(\R)\to\Mat_n(\R),\qquad \Phi(A)={}^tA\,A .
$$

1. Montrer que $\Phi$ est différentiable en tout point $A$ et calculer $d\Phi_A(H)$ pour $H\in\Mat_n(\R)$. Montrer que $\Phi$ est de classe $C^\infty$, calculer $d^2\Phi_A(H,K)$ et vérifier que $d^3\Phi=0$.
2. Montrer que $d\Phi_A$ est à valeurs dans $\Sym_n$ et que, si $A$ est inversible, $d\Phi_A:\Mat_n(\R)\to\Sym_n$ est surjective. Déterminer le noyau de $d\Phi_{I_n}$.
3. Soit $\eps>0$ et $\gamma:\,]-\eps,\eps[\,\to\Mat_n(\R)$ une application de classe $C^1$ telle que $\gamma(t)\in O(n)$ pour tout $t$ et $\gamma(0)=I_n$. Montrer que $\gamma'(0)\in\mathcal A_n$. Vérifier ce résultat sur la courbe des rotations du plan ($n=2$).

## Indices

### Indice 1
$\Phi(A)$ est un « produit » de deux fonctions simples de $A$ : $A\mapsto{}^tA$ et $A\mapsto A$. Quelle règle du cours différentie un produit ?

### Indice 2
Formule de Leibniz avec $b(X,Y)=XY$, bilinéaire continue (on est en dimension finie), $f_1(A)={}^tA$ et $f_2(A)=A$, toutes deux linéaires, donc égales à leur différentielle. Pour la régularité : $A\mapsto d\Phi_A$ est elle-même **linéaire**.

### Indice 3
Pour 2, résoudre ${}^tHA+{}^tAH=S$ en cherchant $H$ de la forme $\tfrac12\,{}^t(A^{-1})S$. Pour 3, dériver en $t=0$ l'identité $\Phi(\gamma(t))=I_n$ (règle de la chaîne).

## Corrigé

**1.** *Différentiabilité.* L'application $b:\Mat_n(\R)\times\Mat_n(\R)\to\Mat_n(\R)$, $b(X,Y)=XY$, est bilinéaire ; elle est continue car $\Mat_n(\R)\times\Mat_n(\R)$ est de dimension finie (ses coefficients sont des polynômes en ceux de $X$ et $Y$). Les applications $f_1(A)={}^tA$ et $f_2(A)=A$ sont linéaires, donc continues (dimension finie) et égales à leur différentielle en tout point ([[ch05-differentielle-lineaire]]). Comme $\Phi(A)=b(f_1(A),f_2(A))$, la formule de Leibniz ([[ch05-formule-leibniz]]) montre que $\Phi$ est différentiable en tout $A$, avec
$$
d\Phi_A(H)=b\big({}^tH,A\big)+b\big({}^tA,H\big)={}^tH\,A+{}^tA\,H .
$$
*Vérification directe.* $\Phi(A+H)-\Phi(A)-({}^tHA+{}^tAH)={}^tH\,H$, et $\norm{{}^tHH}\le C\norm{H}^2=o(H)$ (continuité de l'application bilinéaire $(X,Y)\mapsto{}^tXY$) : on retrouve la définition [[ch05-differentielle-def]].

*Classe $C^\infty$.* L'application $L:\Mat_n(\R)\to\mathcal L(\Mat_n(\R);\Mat_n(\R))$, $A\mapsto d\Phi_A=\big(H\mapsto{}^tHA+{}^tAH\big)$, est linéaire en $A$, donc continue (dimension finie) et de classe $C^\infty$ ([[ch05-lineaire-c-infini]]). Ainsi $d\Phi=L$ est $C^\infty$, donc $\Phi$ est $C^\infty$ par la définition récursive des classes $C^k$ ([[ch05-classe-ck-def]] : $\Phi$ est $C^{k+1}$ dès que $d\Phi$ est $C^k$).

*Différentielle seconde.* Puisque $d\Phi=L$ est linéaire, $d(d\Phi)_A=L$ pour tout $A$, et par définition ([[ch05-differentielle-seconde-def]]) $d^2\Phi_A(H,K)=d(d\Phi)_A(H)(K)=L(H)(K)$ :
$$
d^2\Phi_A(H,K)={}^tK\,H+{}^tH\,K .
$$
Contrôle par la formule pratique ([[ch05-formule-pratique-dpf]]) : $\Phi(A+tH+sK)={}^t(A+tH+sK)(A+tH+sK)$ a pour coefficient de $ts$ le terme ${}^tHK+{}^tKH$, et $\partial_t\partial_s$ en $(0,0)$ donne exactement ce coefficient. On note que $d^2\Phi_A$ est bien symétrique en $(H,K)$ (lemme de Schwarz, [[ch05-lemme-schwarz]]) et **ne dépend pas de $A$** : $A\mapsto d^2\Phi_A$ est constante, donc sa différentielle est nulle, $d^3\Phi=0$.

**2.** *Image dans $\Sym_n$.* ${}^t\big({}^tHA+{}^tAH\big)={}^tA\,H+{}^tH\,A$ : c'est la même matrice, donc $d\Phi_A(H)\in\Sym_n$.

*Surjectivité si $A$ est inversible.* Soit $S\in\Sym_n$ ; posons $H=\tfrac12\,{}^t(A^{-1})\,S$. Alors ${}^tH=\tfrac12\,{}^tS\,A^{-1}=\tfrac12\,SA^{-1}$, d'où ${}^tHA=\tfrac12S$, et ${}^tAH=\tfrac12\,{}^tA\,{}^t(A^{-1})S=\tfrac12\,{}^t(A^{-1}A)S=\tfrac12S$. Donc $d\Phi_A(H)=S$ : $d\Phi_A$ est surjective sur $\Sym_n$.

*Noyau en $I_n$.* $d\Phi_{I_n}(H)={}^tH+H$, qui est nul si et seulement si $H\in\mathcal A_n$ : $\ker d\Phi_{I_n}=\mathcal A_n$. Contrôle par le théorème du rang : $\dim\Mat_n(\R)=n^2=\frac{n(n+1)}2+\frac{n(n-1)}2=\dim\Sym_n+\dim\mathcal A_n$.

**3.** Pour tout $t$, $\Phi(\gamma(t))=I_n$ : la fonction $\Phi\circ\gamma$ est constante, de dérivée nulle. Par la règle de la chaîne ($\gamma$ dérivable en $0$, $\Phi$ différentiable en $\gamma(0)=I_n$ ; c'est la Remarque V.3.13, [[ch05-vecteur-tangent-courbe]]),
$$
0=(\Phi\circ\gamma)'(0)=d\Phi_{\gamma(0)}\big(\gamma'(0)\big)=d\Phi_{I_n}\big(\gamma'(0)\big)={}^t\gamma'(0)+\gamma'(0),
$$
donc $\gamma'(0)\in\mathcal A_n$ d'après 2.

*Exemple.* Pour $n=2$, $\gamma(t)=\begin{pmatrix}\cos t&-\sin t\\ \sin t&\cos t\end{pmatrix}$ vérifie ${}^t\gamma(t)\gamma(t)=I_2$ (car $\cos^2+\sin^2=1$), $\gamma(0)=I_2$ et $\gamma'(0)=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, qui est bien antisymétrique.

## Pièges et variantes

* Écrire $d\Phi_A(H)=2\,{}^tAH$ : faux, le produit matriciel n'est pas commutatif et ${}^tHA\ne{}^tAH$ en général. Leibniz garde l'**ordre** des facteurs.
* Oublier que $d^2\Phi_A(H,K)$ se lit $d(d\Phi)_A(H)(K)$ : il faut différentier l'application $A\mapsto d\Phi_A$, à valeurs dans $\mathcal L(\Mat_n(\R);\Mat_n(\R))$.
* La surjectivité est vers $\Sym_n$, pas vers $\Mat_n(\R)$ : l'image de $d\Phi_A$ est toujours contenue dans $\Sym_n$.
* Variante : si $\gamma(0)=A\in O(n)$ (au lieu de $I_n$), le même calcul donne ${}^t\gamma'(0)A+{}^tA\gamma'(0)=0$, c'est-à-dire ${}^tA\,\gamma'(0)\in\mathcal A_n$ : les vecteurs tangents à $O(n)$ en $A$ sont les $AH$, $H\in\mathcal A_n$.
* Prolongement : comme $d\Phi_A$ est surjective sur $\Sym_n$ pour tout $A\in O(n)=\Phi^{-1}(I_n)$, $O(n)$ est une sous-variété de dimension $\frac{n(n-1)}2$ ([[ch09-sous-variete-equation-valeur-reguliere]]) et l'espace tangent en $I_n$ est exactement $\mathcal A_n$.
