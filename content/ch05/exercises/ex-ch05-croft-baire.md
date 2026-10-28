---
id: ex-ch05-croft-baire
type: exercise
chapters: [5]
title: Limite le long des suites arithmétiques et limite à l'infini
source: "Classique (lemme de Croft, 1957 ; application standard du théorème de Baire)"
difficulty: 3
time: 40
tools: [ch05-baire]
---
## Énoncé

Soit $f:\,]0,+\infty[\,\to\R$ une fonction **continue** telle que, pour tout $x>0$,
$$
f(nx)\xrightarrow[n\to+\infty]{}0\qquad(n\in\N^*).
$$
On veut montrer que $f(x)\to0$ quand $x\to+\infty$. On fixe $\eps>0$ et l'on pose, pour $N\in\N^*$,
$$
F_N=\big\{x\in[1,2]\ :\ |f(nx)|\le\eps\ \text{ pour tout entier } n\ge N\big\}.
$$

1. Montrer que chaque $F_N$ est un fermé de $[1,2]$ et que $\bigcup_{N\ge1}F_N=[1,2]$.
2. En déduire qu'il existe $N\ge1$ et des réels $1\le\alpha<\beta\le2$ tels que $]\alpha,\beta[\,\subset F_N$.
3. Montrer qu'il existe $A>0$ tel que $\bigcup_{n\ge N}\,]n\alpha,n\beta[\,\supset\,]A,+\infty[$. Conclure.
4. On note $\mathcal P$ l'ensemble des nombres premiers et $g=\mathbf 1_S$ l'indicatrice de $S=\{\sqrt p\ :\ p\in\mathcal P\}$ (définie sur $]0,+\infty[$). Montrer que $g(nx)\to0$ pour tout $x>0$, mais que $g(x)$ ne tend pas vers $0$ quand $x\to+\infty$. Quelle hypothèse a-t-on supprimée, et à quel endroit de la preuve servait-elle ?

## Indices

### Indice 1
L'hypothèse porte sur chaque $x$ séparément (le rang $N$ dépend de $x$), la conclusion demande de l'uniformité. Quel théorème transforme « une réunion dénombrable recouvre tout » en « l'un des morceaux contient un ouvert » ?

### Indice 2
Théorème de Baire dans l'espace métrique complet $[1,2]$ (fermé de $\R$). Il faut des fermés : $F_N$ est une intersection de fermés $\{x : |f(nx)|\le\eps\}$, images réciproques par des fonctions **continues**.

### Indice 3
Pour $y\in\,]n\alpha,n\beta[$, on a $y=nx$ avec $x\in\,]\alpha,\beta[$. Les intervalles $]n\alpha,n\beta[$ et $](n+1)\alpha,(n+1)\beta[$ se chevauchent dès que $(n+1)\alpha<n\beta$, c'est-à-dire $n>\frac{\alpha}{\beta-\alpha}$.

### Indice 4
Pour 4 : si $nx=\sqrt p$ et $mx=\sqrt q$ avec $n\neq m$, alors $p\,m^2=q\,n^2$ ; regarder l'exposant de $p$ dans chaque membre.

## Corrigé

**1.** Pour $n\ge1$, la fonction $\psi_n:[1,2]\to\R$, $x\mapsto f(nx)$, est continue (composée de $f$ continue et de $x\mapsto nx$, à valeurs dans $]0,+\infty[$). Donc $G_n=\psi_n^{-1}([-\eps,\eps])$ est un fermé de $[1,2]$, et $F_N=\bigcap_{n\ge N}G_n$ est fermé comme intersection de fermés.

Soit $x\in[1,2]$. Par hypothèse $f(nx)\to0$, donc il existe $N_x$ tel que $|f(nx)|\le\eps$ pour tout $n\ge N_x$, c'est-à-dire $x\in F_{N_x}$. Ainsi $[1,2]=\bigcup_{N\ge1}F_N$.

**2.** L'espace $[1,2]$, muni de la distance $|x-y|$, est un espace métrique **complet** (fermé de $\R$ complet). Si tous les $F_N$ étaient d'intérieur vide dans $[1,2]$, le théorème de Baire ([[ch05-baire]] ; hypothèses : espace métrique complet, famille **dénombrable** de **fermés**) dirait que leur réunion $[1,2]$ est d'intérieur vide dans $[1,2]$ ; or l'intérieur de $[1,2]$ dans lui-même est $[1,2]\neq\emptyset$. Il existe donc $N$ tel que $F_N$ contienne un ouvert non vide de $[1,2]$, c'est-à-dire un ensemble $[1,2]\cap\,]c-r,c+r[$ avec $c\in[1,2]$, $r>0$. Celui-ci contient un intervalle ouvert $]\alpha,\beta[$ avec $1\le\alpha<\beta\le2$ (par exemple $\alpha=\max(1,c-r)$, $\beta=\min(2,c+r)$, et $\alpha<\beta$ car $c\in[1,2]$).

**3.** *Contrôle sur chaque intervalle.* Soit $n\ge N$ et $y\in\,]n\alpha,n\beta[$. Alors $x=y/n\in\,]\alpha,\beta[\,\subset F_N$, et comme $n\ge N$, $|f(y)|=|f(nx)|\le\eps$.

*Recouvrement.* Choisissons un entier $n_0\ge N$ avec $n_0>\frac{\alpha}{\beta-\alpha}$ et posons $A=n_0\alpha$. Soit $y>A$. L'ensemble des entiers $n\ge n_0$ tels que $n\alpha<y$ est non vide (il contient $n_0$) et fini (car $n\alpha\to+\infty$) ; soit $n$ son plus grand élément. Alors $n\alpha<y\le(n+1)\alpha$, et comme $n\ge n_0>\frac\alpha{\beta-\alpha}$, on a $n(\beta-\alpha)>\alpha$, soit $(n+1)\alpha<n\beta$. Donc $n\alpha<y<n\beta$ : $y\in\,]n\alpha,n\beta[$ avec $n\ge n_0\ge N$. Ainsi $]A,+\infty[\,\subset\bigcup_{n\ge N}]n\alpha,n\beta[$.

*Conclusion.* Pour tout $y>A$, $|f(y)|\le\eps$. Comme $\eps>0$ est arbitraire (le seuil $A$ dépend de $\eps$, ce qui est permis), $f(y)\to0$ quand $y\to+\infty$.

**4.** *$g(nx)\to0$.* Fixons $x>0$ et supposons qu'il existe deux entiers $n\neq m$ avec $nx\in S$ et $mx\in S$ : $nx=\sqrt p$, $mx=\sqrt q$ avec $p,q$ premiers. Alors $p\neq q$ (sinon $nx=mx$, donc $n=m$), et $\frac{\sqrt p}{\sqrt q}=\frac nm$, soit $p\,m^2=q\,n^2$. L'exposant de $p$ dans la décomposition en facteurs premiers vaut $1+2v_p(m)$ (impair) à gauche et $2v_p(n)$ (pair, car $q\neq p$) à droite : contradiction. Il existe donc **au plus un** entier $n$ tel que $g(nx)=1$, et $g(nx)=0$ pour tout $n$ assez grand : $g(nx)\to0$.

*Pas de limite nulle.* $g(\sqrt p)=1$ pour tout premier $p$, et $\sqrt p\to+\infty$ (il y a une infinité de nombres premiers) : $g$ ne tend pas vers $0$ en $+\infty$.

*Hypothèse supprimée.* $g$ n'est pas continue. La continuité servait à la question 1 : sans elle, les $F_N$ ne sont plus nécessairement fermés et le théorème de Baire ne s'applique plus (ici, pour $g$ et $\eps<1$, chaque $F_N$ est le complémentaire dans $[1,2]$ d'un ensemble dénombrable : il est dense, mais pas fermé, et Baire ne dit rien).

## Pièges et variantes

* > ⚠️ Baire demande des **fermés**. C'est l'erreur classique : définir $F_N$ par une inégalité **stricte** $|f(nx)|<\eps$ donne des ouverts, et l'argument s'effondre. Avec $\le$ et $f$ continue, chaque $G_n$ est fermé, et une intersection (même infinie) de fermés est fermée.
* Bien choisir l'espace complet : on applique Baire dans $[1,2]$ (ou n'importe quel segment de $]0,+\infty[$), pas dans $]0,+\infty[$, qui n'est pas complet pour la distance usuelle (même si Baire y reste vrai, car c'est un ouvert de $\R$, cela demande une justification supplémentaire).
* Ne pas oublier que Baire ne dit pas **quel** $F_N$ a un intérieur non vide : $N$, $\alpha$, $\beta$ dépendent de $\eps$, et c'est sans importance.
* Le recouvrement de la question 3 est essentiel : un seul intervalle $]n\alpha,n\beta[$ ne suffit pas ; c'est parce que leur longueur $n(\beta-\alpha)$ tend vers l'infini qu'ils finissent par se chevaucher.
* Variante : il suffit de supposer $f(nx)\to0$ pour tout $x$ dans un intervalle ouvert non vide $]a,b[$ (appliquer Baire dans un segment $[a',b']\subset\,]a,b[$). Variante additive : l'énoncé analogue « $h$ continue sur $\R$ et $h(x+n)\to0$ pour tout $x$ entraîne $h(x)\to0$ » est **faux**. Prendre pour $h$ une somme de « bosses » triangulaires de hauteur $1$, centrées en $c_k=k+\frac1k$ ($k\ge2$), de demi-largeur $\frac1{4k^2}$ : pour $x=j+\theta$ ($j\in\Z$, $\theta\in[0,1[$), $x+n$ ne tombe dans la bosse numéro $k=j+n$ que si $|\theta-\frac1k|<\frac1{4k^2}$, ce qui n'arrive que pour un nombre fini de $k$ ; pourtant $h(c_k)=1$. Ce qui fait marcher le cas multiplicatif, c'est que les intervalles $]n\alpha,n\beta[$ ont une longueur qui tend vers l'infini, alors que les translatés $]\alpha+n,\beta+n[$ gardent la même longueur.
